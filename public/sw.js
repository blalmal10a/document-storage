if(!self.define){let e,f={};const s=(s,i)=>(s=new URL(s+".js",i).href,f[s]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=f,document.head.appendChild(e)}else e=s,importScripts(s),f()})).then((()=>{let e=f[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(f[n])return;let a={};const o=e=>s(e,n),r={module:{uri:n},exports:a,require:o};f[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-c1cfc6fb"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend-tilte-storage"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/addEditData.c7f90577.js",revision:"efda642edbfb8f4c402011fda2de592b"},{url:"assets/ErrorNotFound.f3d6c0c9.js",revision:"e39088376cbcc3c6358ccaf55169180d"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.5baec3ad.js",revision:"78df355bab2136c087f18e850f400316"},{url:"assets/index.78a752d3.css",revision:"9482d1a198b8724ec5c30806f6d276cb"},{url:"assets/IndexPage.f3dfadf8.css",revision:"1cff36185cafd6002421b31a76311371"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.c734e03f.js",revision:"02729191c5bd45a78e6fb2eb20da3805"},{url:"assets/materialdesignicons-webfont.633d596f.woff2",revision:"66e43f0fe32824d589f7ab86d3603a53"},{url:"assets/materialdesignicons-webfont.7f3afe9b.woff",revision:"c2df65ff2e133f739f847239c72de9ce"},{url:"assets/preload.css",revision:"329f5981d93e633b0a8bfff9a13e14ef"},{url:"favicon.ico",revision:"33100c16567f4f58079ba4b7ea18e717"},{url:"icons/favicon-128x128.png",revision:"dfc0561f153373bf7141e9a7d7e9b5a3"},{url:"icons/favicon-16x16.png",revision:"0072ef3cd31cbcc6306db353d26896ce"},{url:"icons/favicon-32x32.png",revision:"087443035fcdac511a93c92356a0592f"},{url:"icons/favicon-96x96.png",revision:"d4375c25bdd9b4207f8050de0142640a"},{url:"icons/icon-128x128.png",revision:"dfc0561f153373bf7141e9a7d7e9b5a3"},{url:"icons/icon-192x192.png",revision:"dc1068d3f0d95a3b07080a1d24d13f67"},{url:"icons/icon-256x256.png",revision:"66efd7056963a067f4516070ff9cc05e"},{url:"icons/icon-384x384.png",revision:"92fe3f892efa4148af80096ac7b06ab7"},{url:"icons/icon-512x512.png",revision:"ea800ea873b563f98fde68d3ec3af825"},{url:"icons/ms-icon-144x144.png",revision:"d347f43d3e7af179e5d3faeb2b04b789"},{url:"icons/safari-pinned-tab.svg",revision:"f3a8e19833dde37770c95e3555f40b22"},{url:"index.html",revision:"186774fa9a1be8a07f904295a3fdb0f0"},{url:"manifest.json",revision:"252249a30f0b224d41016d93767aa211"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
