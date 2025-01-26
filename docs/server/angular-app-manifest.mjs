
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/rostliny"
  }
],
  assets: new Map([
['index.csr.html', {size: 28325, hash: '5e58c082c184879e4e3df1076a891422d4e3971659fec467ae33c111ff1449c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 20675, hash: 'd88b94bed5b199612856a00e24f86383d4d8a12e0177fdbe1d7fa289ccbd150f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 52606, hash: '157ca5bc63eae3d83a7e7f16e758c7323f52a9204637edbfa9fb43feb144152a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-IR4BA25J.css', {size: 8234, hash: 'P01/l3+m49A', text: () => import('./assets-chunks/styles-IR4BA25J_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
