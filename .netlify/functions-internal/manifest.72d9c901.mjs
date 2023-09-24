import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro.2331e574.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.33eb8977.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.33eb8977.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.33eb8977.css"}],"routeData":{"route":"/news","type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news/index.astro","pathname":"/news","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.33eb8977.css"},{"type":"inline","content":".content[data-astro-cid-zoshki4t] h1[data-astro-cid-zoshki4t]{font-size:24px;font-weight:700}.content[data-astro-cid-zoshki4t] a[data-astro-cid-zoshki4t]{color:#00f}\n"}],"routeData":{"route":"/news/[id]","type":"page","pattern":"^\\/news\\/([^/]+?)\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/news/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/kakeru/Desktop/astro_learning/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["/Users/kakeru/Desktop/astro_learning/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/kakeru/Desktop/astro_learning/src/pages/news/[id].astro",{"propagation":"none","containsHead":true}],["/Users/kakeru/Desktop/astro_learning/src/pages/news/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/image-endpoint.js":"chunks/pages/image-endpoint.js.70f47eba.mjs","\u0000@astrojs-manifest":"manifest.72d9c901.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint@_@js.67375468.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.fbcf4ef2.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index@_@astro.fd2f8d9c.mjs","\u0000@astro-page:src/pages/news/index@_@astro":"chunks/index@_@astro.f4c706a2.mjs","\u0000@astro-page:src/pages/news/[id]@_@astro":"chunks/_id_@_@astro.aa33fdd9.mjs","/Users/kakeru/Desktop/astro_learning/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp.c19d45c1.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/noto-sans-jp-3-wght-normal.dd282426.woff2","/_astro/noto-sans-jp-0-wght-normal.5e1d6c82.woff2","/_astro/noto-sans-jp-5-wght-normal.1ae9802a.woff2","/_astro/noto-sans-jp-2-wght-normal.1a95b40e.woff2","/_astro/noto-sans-jp-4-wght-normal.ab99cd05.woff2","/_astro/noto-sans-jp-1-wght-normal.b7329523.woff2","/_astro/noto-sans-jp-8-wght-normal.5b69b868.woff2","/_astro/noto-sans-jp-6-wght-normal.3eb936b7.woff2","/_astro/noto-sans-jp-10-wght-normal.9621304b.woff2","/_astro/noto-sans-jp-9-wght-normal.6402b6a4.woff2","/_astro/noto-sans-jp-11-wght-normal.3b482901.woff2","/_astro/noto-sans-jp-7-wght-normal.321e0b92.woff2","/_astro/noto-sans-jp-12-wght-normal.87af73fc.woff2","/_astro/noto-sans-jp-14-wght-normal.b48af02f.woff2","/_astro/noto-sans-jp-17-wght-normal.c0f59d34.woff2","/_astro/noto-sans-jp-15-wght-normal.70cb4bd2.woff2","/_astro/noto-sans-jp-16-wght-normal.ee5dd230.woff2","/_astro/noto-sans-jp-21-wght-normal.db174010.woff2","/_astro/noto-sans-jp-18-wght-normal.9bdc2d15.woff2","/_astro/noto-sans-jp-22-wght-normal.39089855.woff2","/_astro/noto-sans-jp-19-wght-normal.6df36132.woff2","/_astro/noto-sans-jp-20-wght-normal.c43ff3f4.woff2","/_astro/noto-sans-jp-23-wght-normal.08a055a0.woff2","/_astro/noto-sans-jp-24-wght-normal.343fa734.woff2","/_astro/noto-sans-jp-25-wght-normal.39d0d23d.woff2","/_astro/noto-sans-jp-26-wght-normal.a4ee318b.woff2","/_astro/noto-sans-jp-28-wght-normal.570c46c7.woff2","/_astro/noto-sans-jp-27-wght-normal.770f8ab4.woff2","/_astro/noto-sans-jp-30-wght-normal.ad6e5569.woff2","/_astro/noto-sans-jp-29-wght-normal.5720cc93.woff2","/_astro/noto-sans-jp-13-wght-normal.4300259c.woff2","/_astro/noto-sans-jp-32-wght-normal.c40ab0b8.woff2","/_astro/noto-sans-jp-31-wght-normal.a6a67001.woff2","/_astro/noto-sans-jp-33-wght-normal.c6989e5b.woff2","/_astro/noto-sans-jp-35-wght-normal.b8e6da95.woff2","/_astro/noto-sans-jp-36-wght-normal.58b8055a.woff2","/_astro/noto-sans-jp-34-wght-normal.77488edc.woff2","/_astro/noto-sans-jp-37-wght-normal.0007e97f.woff2","/_astro/noto-sans-jp-39-wght-normal.9e3afa15.woff2","/_astro/noto-sans-jp-40-wght-normal.6056c962.woff2","/_astro/noto-sans-jp-41-wght-normal.a776b381.woff2","/_astro/noto-sans-jp-42-wght-normal.847028d9.woff2","/_astro/noto-sans-jp-43-wght-normal.a597be74.woff2","/_astro/noto-sans-jp-44-wght-normal.2c792c40.woff2","/_astro/noto-sans-jp-45-wght-normal.1c24f619.woff2","/_astro/noto-sans-jp-38-wght-normal.9ac082f5.woff2","/_astro/noto-sans-jp-46-wght-normal.1bd151ba.woff2","/_astro/noto-sans-jp-48-wght-normal.c6495364.woff2","/_astro/noto-sans-jp-47-wght-normal.08f5ea96.woff2","/_astro/noto-sans-jp-49-wght-normal.3b95daaa.woff2","/_astro/noto-sans-jp-50-wght-normal.b2ee0de3.woff2","/_astro/noto-sans-jp-52-wght-normal.b932b0c0.woff2","/_astro/noto-sans-jp-51-wght-normal.23f49a76.woff2","/_astro/noto-sans-jp-53-wght-normal.5744a7e0.woff2","/_astro/noto-sans-jp-55-wght-normal.f1880520.woff2","/_astro/noto-sans-jp-54-wght-normal.ead57305.woff2","/_astro/noto-sans-jp-57-wght-normal.4882abc4.woff2","/_astro/noto-sans-jp-56-wght-normal.586db19f.woff2","/_astro/noto-sans-jp-59-wght-normal.012e7c76.woff2","/_astro/noto-sans-jp-58-wght-normal.a8e225b5.woff2","/_astro/noto-sans-jp-60-wght-normal.32b999d9.woff2","/_astro/noto-sans-jp-61-wght-normal.f661cd5a.woff2","/_astro/noto-sans-jp-64-wght-normal.51128b79.woff2","/_astro/noto-sans-jp-65-wght-normal.3dc464f4.woff2","/_astro/noto-sans-jp-66-wght-normal.b4a3028e.woff2","/_astro/noto-sans-jp-68-wght-normal.5e3a245b.woff2","/_astro/noto-sans-jp-67-wght-normal.9888dc98.woff2","/_astro/noto-sans-jp-62-wght-normal.0d0c0e22.woff2","/_astro/noto-sans-jp-63-wght-normal.c2ba989c.woff2","/_astro/noto-sans-jp-70-wght-normal.d7e91ec5.woff2","/_astro/noto-sans-jp-72-wght-normal.d4ea72a0.woff2","/_astro/noto-sans-jp-71-wght-normal.a6182f32.woff2","/_astro/noto-sans-jp-73-wght-normal.82c0a7d3.woff2","/_astro/noto-sans-jp-69-wght-normal.c5fe3dc9.woff2","/_astro/noto-sans-jp-74-wght-normal.fd2b8b73.woff2","/_astro/noto-sans-jp-75-wght-normal.7a66bb5e.woff2","/_astro/noto-sans-jp-76-wght-normal.467114a9.woff2","/_astro/noto-sans-jp-77-wght-normal.71117e95.woff2","/_astro/noto-sans-jp-78-wght-normal.d2f351d5.woff2","/_astro/noto-sans-jp-79-wght-normal.2f8ada7e.woff2","/_astro/noto-sans-jp-80-wght-normal.0d2ec8d4.woff2","/_astro/noto-sans-jp-82-wght-normal.063b8da7.woff2","/_astro/noto-sans-jp-83-wght-normal.540e403f.woff2","/_astro/noto-sans-jp-84-wght-normal.5aded980.woff2","/_astro/noto-sans-jp-85-wght-normal.959bbba0.woff2","/_astro/noto-sans-jp-86-wght-normal.a81d49dd.woff2","/_astro/noto-sans-jp-81-wght-normal.f77b1f2e.woff2","/_astro/noto-sans-jp-87-wght-normal.803ce92f.woff2","/_astro/noto-sans-jp-88-wght-normal.3911d8dc.woff2","/_astro/noto-sans-jp-89-wght-normal.c5d825d6.woff2","/_astro/noto-sans-jp-91-wght-normal.b43dc0bd.woff2","/_astro/noto-sans-jp-90-wght-normal.055ed1c7.woff2","/_astro/noto-sans-jp-92-wght-normal.e3922c9a.woff2","/_astro/noto-sans-jp-94-wght-normal.d2a95d8f.woff2","/_astro/noto-sans-jp-93-wght-normal.e146d5a3.woff2","/_astro/noto-sans-jp-95-wght-normal.b2cadcc2.woff2","/_astro/noto-sans-jp-96-wght-normal.c613671a.woff2","/_astro/noto-sans-jp-97-wght-normal.7bd88542.woff2","/_astro/noto-sans-jp-98-wght-normal.717b4531.woff2","/_astro/noto-sans-jp-99-wght-normal.29aa813f.woff2","/_astro/noto-sans-jp-101-wght-normal.8be2aecd.woff2","/_astro/noto-sans-jp-100-wght-normal.2ee2afd3.woff2","/_astro/noto-sans-jp-103-wght-normal.c1ebbd21.woff2","/_astro/noto-sans-jp-102-wght-normal.af9c6c37.woff2","/_astro/noto-sans-jp-104-wght-normal.aded9cd6.woff2","/_astro/noto-sans-jp-106-wght-normal.2cb96670.woff2","/_astro/noto-sans-jp-105-wght-normal.f84550c0.woff2","/_astro/noto-sans-jp-107-wght-normal.7f8fd3ac.woff2","/_astro/noto-sans-jp-108-wght-normal.849cf947.woff2","/_astro/noto-sans-jp-109-wght-normal.b5d374fc.woff2","/_astro/noto-sans-jp-110-wght-normal.57dcfcf8.woff2","/_astro/noto-sans-jp-111-wght-normal.fbac721a.woff2","/_astro/noto-sans-jp-112-wght-normal.7b2ccc0d.woff2","/_astro/noto-sans-jp-113-wght-normal.b6d5f75e.woff2","/_astro/noto-sans-jp-114-wght-normal.50c4024d.woff2","/_astro/noto-sans-jp-115-wght-normal.2f4611b5.woff2","/_astro/noto-sans-jp-116-wght-normal.b5fbbc60.woff2","/_astro/noto-sans-jp-117-wght-normal.e4ef32d9.woff2","/_astro/noto-sans-jp-118-wght-normal.117fff37.woff2","/_astro/noto-sans-jp-119-wght-normal.9151040b.woff2","/_astro/index.33eb8977.css","/_favicon.svg","/favicon.ico","/ogp.jpg","/fonts/BebasNeue-Bold.otf","/fonts/Disclaimer-Plain.otf","/fonts/Gamon Trial.otf","/image/top/msg_img01.jpg","/image/top/msg_img02.jpg","/image/top/msg_img03.jpg","/image/top/mv_img.jpg"]});

export { manifest };
