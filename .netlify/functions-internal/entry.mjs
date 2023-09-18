import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest.a907fd88.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro.2331e574.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint@_@js.9f21b165.mjs');
const _page1  = () => import('./chunks/index@_@astro.aa5ea0d0.mjs');
const _page2  = () => import('./chunks/index@_@astro.38678c57.mjs');
const _page3  = () => import('./chunks/index@_@astro.d504551e.mjs');
const _page4  = () => import('./chunks/_id_@_@astro.b5f8de31.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/about/index.astro", _page2],["src/pages/news/index.astro", _page3],["src/pages/news/[id].astro", _page4]]);
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
