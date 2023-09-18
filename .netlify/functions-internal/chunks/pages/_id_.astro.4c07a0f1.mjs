import { joinPaths, isRemotePath } from '@astrojs/internal-helpers/path';
/* empty css                           */import { A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, I as InvalidImageService, a as ExpectedImageOptions, c as createAstro, b as createComponent, d as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderHead, g as renderComponent, h as renderSlot, u as unescapeHTML } from '../astro.2331e574.mjs';
import 'clsx';
import { createClient } from 'microcms-js-sdk';
/* empty css                          */
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg"
];

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const baseService = {
  validateOptions(options) {
    if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(JSON.stringify(options.src))
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
    }
    if (!options.format) {
      options.format = "webp";
    }
    return options;
  },
  getHTMLAttributes(options) {
    let targetWidth = options.width;
    let targetHeight = options.height;
    if (isESMImportedImage(options.src)) {
      const aspectRatio = options.src.width / options.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = options.src.width;
        targetHeight = options.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", "/_image");
    return `${imageEndpoint}?${searchParams}`;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q")
    };
    return transform;
  }
};

function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}

function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src))
    return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../sharp.9f5cb217.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default : options.src
  };
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && // If `getURL` returned the same URL as the user provided, it means the service doesn't need to do anything
  !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions);
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    attributes: service.getHTMLAttributes !== void 0 ? service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$4 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/Users/kakeru/Desktop/astro_learning/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$3 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Head;
  const props = Astro2.props;
  const title = props.title ? `${props.title} - Astro\u3084\u3063\u3066\u307F\u305F` : "Astro\u3084\u3063\u3066\u307F\u305F";
  const pagePath = props.pagePath;
  return renderTemplate`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title><meta name="description" content="【朗報】イッチがAstroでWebサイトを作った結果www"><meta name="format-detection" content="telephone=no"><!-- favicon/webclipicon --><link rel="icon" href="http://localhost:4321/favicon.ico"><!-- <link rel="icon" href="favicon.svg" type="image/svg+xml"> --><!-- <link rel="apple-touch-icon" href="webclip.png" /> --><!-- ogp --><meta property="og:site_name" content="Astroやってみた"><meta property="og:url"${addAttribute(`http://localhost:4321${pagePath}`, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="【朗報】イッチがAstroでWebサイトを作った結果www"><meta property="og:image" content="http://localhost:4321/ogp.jpg"><meta property="og:locale" content="ja_JP"><!-- <meta property="fb:app_id" content="AppID"> --><meta name="twitter:card" content="summary_large_image"><!-- <meta name="twitter:site" content="@moshamusha2010" /> --><meta name="twitter:description" content="【朗報】イッチがAstroでWebサイトを作った結果www"><meta name="twitter:image:src" content="http://localhost:4321/ogp.jpg">${renderHead()}</head>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/base/Head.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const menuList = [
    {
      name: "About",
      href: "/about"
    },
    {
      name: "News",
      href: "/news"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-dt2qj6rv><a class="logo" href="/" data-astro-cid-dt2qj6rv>✌️</a><ul class="menu" data-astro-cid-dt2qj6rv>${menuList.map((item) => {
    return renderTemplate`<a class="link"${addAttribute(item.href, "href")} data-astro-cid-dt2qj6rv><li class="list" data-astro-cid-dt2qj6rv>${item.name}</li></a>`;
  })}</ul></header>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/base/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$MySiteLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MySiteLayout;
  const props = Astro2.props;
  return renderTemplate`<html lang="ja">${renderComponent($$result, "Head", $$Head, { "title": props.title, "pagePath": props.pagePath })}${maybeRenderHead()}<body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/kakeru/Desktop/astro_learning/src/layouts/MySiteLayout.astro", void 0);

const client = createClient({
  serviceDomain: "astrotestsite",
  apiKey: "zu2SOml44XMDG2yfDE4zkhlKBoKeq0N7xGG0"
});
const getBlogs = async (queries) => {
  return await client.get({ endpoint: "blogs", queries });
};
const getBlogDetail = async (contentId, queries) => {
  return await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries
  });
};

const dateFormat = (date) => {
  const dateFormat2 = new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).split("/").join(".");
  return dateFormat2;
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await getBlogs({ fields: ["id"] });
  return response.contents.map((content) => ({
    params: {
      id: content.id
    }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const blog = await getBlogDetail(id);
  return renderTemplate`${renderComponent($$result, "MySiteLayout", $$MySiteLayout, { "title": blog.title, "pagePath": `/news/${id}`, "data-astro-cid-zoshki4t": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-4/5 max-w-5xl mx-auto py-40" data-astro-cid-zoshki4t><h1 class="text-4xl font-bold" data-astro-cid-zoshki4t>${blog.title}</h1><div class="flex items-center mt-6" data-astro-cid-zoshki4t><p class="text-gray-400 text-xs" data-astro-cid-zoshki4t>公開日：${dateFormat(blog.publishedAt)}</p><p class="text-gray-400 text-xs ml-3.5" data-astro-cid-zoshki4t>最終更新日：${dateFormat(blog.updatedAt)}</p></div><div class="flex items-center mt-2.5" data-astro-cid-zoshki4t>${blog.category.map((cate) => {
    return renderTemplate`<p class="rounded border border-gray-400 p-1 text-xs bg-gray-100 mr-2.5" data-astro-cid-zoshki4t>${cate}</p>`;
  })}</div>${blog.thumbnail && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full mt-12", "src": blog.thumbnail.url, "alt": "\u30B5\u30E0\u30CD\u30A4\u30EB", "width": blog.thumbnail.width, "height": blog.thumbnail.height, "data-astro-cid-zoshki4t": true })}`}<div class="content mt-24 text-base leading-loose" data-astro-cid-zoshki4t>${unescapeHTML(blog.content)}</div></div>` })}`;
}, "/Users/kakeru/Desktop/astro_learning/src/pages/news/[id].astro", void 0);

const $$file = "/Users/kakeru/Desktop/astro_learning/src/pages/news/[id].astro";
const $$url = "/news/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _id_ as _, isRemoteAllowed as a, getBlogs as b, $$MySiteLayout as c, baseService as d, getConfiguredImageService as g, imageConfig as i, parseQuality as p };
