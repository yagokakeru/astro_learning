/* empty css                           */import { c as createAstro, b as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, m as maybeRenderHead, g as renderComponent, h as renderSlot } from '../astro.5ac620b8.mjs';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './image-endpoint.js.4adecf15.mjs';

const $$Astro$9 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Head;
  const props = Astro2.props;
  const title = props.title ? `${props.title} - Astro\u3084\u3063\u3066\u307F\u305F` : "Astro\u3084\u3063\u3066\u307F\u305F";
  const pagePath = props.pagePath;
  return renderTemplate`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title><meta name="description" content="【朗報】イッチがAstroでWebサイトを作った結果www"><meta name="format-detection" content="telephone=no"><!-- favicon/webclipicon --><link rel="icon" href="http://localhost:4321/favicon.ico"><!-- <link rel="icon" href="favicon.svg" type="image/svg+xml"> --><!-- <link rel="apple-touch-icon" href="webclip.png" /> --><!-- ogp --><meta property="og:site_name" content="Astroやってみた"><meta property="og:url"${addAttribute(`http://localhost:4321${pagePath}`, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="【朗報】イッチがAstroでWebサイトを作った結果www"><meta property="og:image" content="http://localhost:4321/ogp.jpg"><meta property="og:locale" content="ja_JP"><!-- <meta property="fb:app_id" content="AppID"> --><meta name="twitter:card" content="summary_large_image"><!-- <meta name="twitter:site" content="@moshamusha2010" /> --><meta name="twitter:description" content="【朗報】イッチがAstroでWebサイトを作った結果www"><meta name="twitter:image:src" content="http://localhost:4321/ogp.jpg">${renderHead()}</head>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/base/Head.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
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

const $$Astro$7 = createAstro();
const $$MySiteLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MySiteLayout;
  const props = Astro2.props;
  return renderTemplate`<html lang="ja">${renderComponent($$result, "Head", $$Head, { "title": props.title, "pagePath": props.pagePath })}${maybeRenderHead()}<body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/kakeru/Desktop/astro_learning/src/layouts/MySiteLayout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center justify-center w-full h-screen bg-gray-50 relative"><div class="w-full absolute left-0 -bottom-12"><p class="block text-[1.5vw] ml-7">Hello everyone.<br>Welcome to website.</p><h1 class="font-bebas_bold text-[21vw] leading-none tracking-tight text-center scale-y-90">ASTRO LEARNING</h1></div>${renderComponent($$result, "Image", $$Image, { "class": "w-1/3 rounded-xl relative", "src": "/image/top/mv_img.jpg", "alt": "\u30E1\u30A4\u30F3\u30D3\u30B8\u30E5\u30A2\u30EB", "width": "50", "height": "63" })}</section>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/page/top/Main.astro", void 0);

const $$Astro$5 = createAstro();
const $$Message = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Message;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 py-52"><p class="mx-auto text-[2.5vw] leading-loose text-center w-4/5">
Astroを触ってみた✌️<br>
画像用のコンポーネントはあるけどリンク用のはないのかな？🤔<br>
ReactやNext.jsと考え方は似ていてとっつきやすい。<br>
動的ルーティングやコンポーネントにPropsを渡したりはできた。<br>
マークダウンやCMS連携、アニメーションあたりをやってみようかな。<br>
ついでにTailwind使ってみてるけどよくわからん
</p></section>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/page/top/Message.astro", void 0);

const $$Astro$4 = createAstro();
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$News;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-700 py-36"><ul class="mx-auto w-11/12"><!-- {
            response.contents.map((content: any, index: number) => {
                return <a class={\`border-t \${(response.contents.length - 1 === index) && 'border-b'} border-white border-solid block text-[2vw] py-8 text-white\`} href={\`news/\${content.id}\`}><li>{content.title}</li></a>
            })
        } --><a class="border-t border-white border-solid block text-[2vw] py-8 text-white" href=""><li>Webサイトを公開しました。</li></a><a class="border-t border-white border-solid block text-[2vw] py-8 text-white" href=""><li>Webサイトを公開しました。</li></a><a class="border-t border-white border-solid block text-[2vw] py-8 text-white" href=""><li>Webサイトを公開しました。</li></a><a class="border-t border-white border-solid block text-[2vw] py-8 text-white" href=""><li>Webサイトを公開しました。</li></a><a class="border-t border-b border-white border-solid block text-[2vw] py-8 text-white" href=""><li>Webサイトを公開しました。</li></a></ul></section>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/page/top/News.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "MySiteLayout", $$MySiteLayout, { "title": "Home", "pagePath": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {})}${renderComponent($$result2, "Message", $$Message, {})}${renderComponent($$result2, "News", $$News, {})}` })}`;
}, "/Users/kakeru/Desktop/astro_learning/src/pages/index.astro", void 0);

const $$file$2 = "/Users/kakeru/Desktop/astro_learning/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$PageMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageMain;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24"><div class="mx-auto w-11/12"><h1 class="font-bebas_bold text-[11vw]">${props.title}</h1></div></section>`;
}, "/Users/kakeru/Desktop/astro_learning/src/components/ui/PageMain.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "MySiteLayout", $$MySiteLayout, { "title": "About", "pagePath": "/about" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$PageMain, { "title": "About" })}` })}`;
}, "/Users/kakeru/Desktop/astro_learning/src/pages/about/index.astro", void 0);

const $$file$1 = "/Users/kakeru/Desktop/astro_learning/src/pages/about/index.astro";
const $$url$1 = "/about";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MySiteLayout", $$MySiteLayout, { "title": "News", "pagePath": "/news" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$PageMain, { "title": "News" })}` })}`;
}, "/Users/kakeru/Desktop/astro_learning/src/pages/news/index.astro", void 0);

const $$file = "/Users/kakeru/Desktop/astro_learning/src/pages/news/index.astro";
const $$url = "/news";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
