import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8bf5a13a.mjs';
import 'preact';
import 'preact-render-to-string';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_6f765cdd.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_3c6d79c1.mjs');
const _page1  = () => import('./chunks/index_3c3dacc6.mjs');
const _page2  = () => import('./chunks/_id__f63d9812.mjs');
const _page3  = () => import('./chunks/index_b54cd2ca.mjs');
const _page4  = () => import('./chunks/index_a2d20a43.mjs');
const _page5  = () => import('./chunks/preview_59b4ab16.mjs');
const _page6  = () => import('./chunks/_id__74b7abb0.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.0_sass@1.68.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/category/[id].astro", _page2],["src/pages/about/index.astro", _page3],["src/pages/news/index.astro", _page4],["src/pages/news/preview.astro", _page5],["src/pages/news/[id].astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
