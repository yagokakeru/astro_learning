import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e56a2fe6.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_433effd9.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_d8d97f05.mjs');
const _page1  = () => import('./chunks/index_29e88d08.mjs');
const _page2  = () => import('./chunks/index_0d3e9e6a.mjs');
const _page3  = () => import('./chunks/index_5a3e4a08.mjs');
const _page4  = () => import('./chunks/_id__776f799e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/about/index.astro", _page2],["src/pages/news/index.astro", _page3],["src/pages/news/[id].astro", _page4]]);
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
