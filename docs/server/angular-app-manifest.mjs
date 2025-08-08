
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ScholarAngular-Project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ScholarAngular-Project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 528, hash: 'cc89b8494d9c5f44a0b2383080752e0b39be665dfa20600776dbe097ea22805a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '317289208136a19d2914d47ee95a162ddfce11765de20efc7cdc3205d64d448e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 696, hash: '48291eb681534c99e3eaa8d9c112f64a881a44d1290cd3314b1359b3c0f1f400', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
