
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
['index.csr.html', {size: 28324, hash: 'acc98bac052a8fede003b2ab8e2a28430ee99da0ca995fcacfffe934cd2193a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 20674, hash: '9d6019ba3fbe0ce76747faf29862a3077303a62e00c33d6298adb69d5c16391b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['y/index.html', {size: 52605, hash: 'fc471254d7b74093ff7bae10530b6b0727b58058f87933dede26883287e2c75a', text: () => import('./assets-chunks/y_index_html.mjs').then(m => m.default)}], 
['styles-IR4BA25J.css', {size: 8234, hash: 'P01/l3+m49A', text: () => import('./assets-chunks/styles-IR4BA25J_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
