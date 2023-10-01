export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('./pages/image-endpoint_7830dcfa.mjs').then(n => n.i);

export { page };
