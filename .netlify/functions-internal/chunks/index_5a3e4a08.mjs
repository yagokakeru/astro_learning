export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_d62c5601.mjs').then(n => n.b);

export { page };
