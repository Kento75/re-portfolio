"use strict";var precacheConfig=[["/re-portfolio/index.html","0388315da51faa903d39d1124fe29192"],["/re-portfolio/static/css/main.528782e9.css","0f1bdec003a4b988f8594ffa6b95bbd5"],["/re-portfolio/static/js/main.44b5c02f.js","da59185a36834177f1babb6b4f48bdc9"],["/re-portfolio/static/media/roboto.0f7fb3f8.woff","0f7fb3f830134f46529807a2baa3eb5e"],["/re-portfolio/static/media/roboto.1ffc52ae.woff2","1ffc52aee7d9b8f87ccdb7f3d2189951"],["/re-portfolio/static/media/roboto.cf55a1d7.ttf","cf55a1d7e6ac44f8abad4edf7c5ca20d"],["/re-portfolio/static/media/robotoblack.191b60e1.ttf","191b60e1c020d17cb21f1af53aac3c1d"],["/re-portfolio/static/media/robotoblack.996d4322.woff","996d432298916d6685d3fc9910b3a623"],["/re-portfolio/static/media/robotoblack.ef468579.woff2","ef468579fc95e880fba72e7dc246b28b"],["/re-portfolio/static/media/robotoblackitalic.545170ad.woff","545170ad7ec43cb69eb24393fc456fe3"],["/re-portfolio/static/media/robotoblackitalic.dc841d8b.woff2","dc841d8bed773f2a82244eb9fc925bd9"],["/re-portfolio/static/media/robotoblackitalic.fb88977f.ttf","fb88977fc003919f48a340e8855689f6"],["/re-portfolio/static/media/robotobold.0dba604b.woff2","0dba604b7e9ae7588049675cf5ab5f7c"],["/re-portfolio/static/media/robotobold.1f8f574a.ttf","1f8f574abb64aa6c2a1290e9b6d00ea8"],["/re-portfolio/static/media/robotobold.741313d7.woff","741313d7739cec544023aba65e031c9d"],["/re-portfolio/static/media/robotobolditalic.631e3621.ttf","631e3621be5c8b6612caa6bfc2493827"],["/re-portfolio/static/media/robotobolditalic.95564a03.woff2","95564a03d7c3d5a8f4fc5db734d3e9c9"],["/re-portfolio/static/media/robotobolditalic.b08d3f31.woff","b08d3f31c14ba42c23d5beedbf75e68d"],["/re-portfolio/static/media/robotoitalic.3d6f1a9a.ttf","3d6f1a9aac58af8ce560c4139396ef99"],["/re-portfolio/static/media/robotoitalic.5dfcc8d4.woff2","5dfcc8d45441c4c2bebb4549bc2fe1d1"],["/re-portfolio/static/media/robotoitalic.8965fdf7.woff","8965fdf7788cba2d58f40f343b710785"],["/re-portfolio/static/media/robotolight.28c7cb3c.woff","28c7cb3cd9807ad30f98e2de2438e3a2"],["/re-portfolio/static/media/robotolight.9d1a2bfc.woff2","9d1a2bfca3ac335c2a0362ec6af3ac91"],["/re-portfolio/static/media/robotolight.ded0d357.ttf","ded0d357b4d0a53375d188883d326d37"],["/re-portfolio/static/media/robotolightitalic.3ec9fb1d.woff","3ec9fb1d237dcaa97159db0237227b6b"],["/re-portfolio/static/media/robotolightitalic.5f7a5366.ttf","5f7a5366871c577c988ad1ce10800b85"],["/re-portfolio/static/media/robotolightitalic.9fb3969e.woff2","9fb3969e6d3237cf36de14eeb8fda13b"],["/re-portfolio/static/media/robotomedium.400c1454.woff2","400c14541b7297a097e57cc8f271f8a5"],["/re-portfolio/static/media/robotomedium.f524bf1c.ttf","f524bf1c79b24869af4050b6347bc0d6"],["/re-portfolio/static/media/robotomedium.f6be901f.woff","f6be901fde0e25b6dd433e5a423ae955"],["/re-portfolio/static/media/robotomediumitalic.03125dd9.woff","03125dd99bc786c69ca0294ac42ec35c"],["/re-portfolio/static/media/robotomediumitalic.bab6e9e2.ttf","bab6e9e21edc57de1b6008e9bd00c2f2"],["/re-portfolio/static/media/robotomediumitalic.c994b61f.woff2","c994b61f87db407db2abc337e624161e"],["/re-portfolio/static/media/robotothin.0faeacbe.ttf","0faeacbe46e18ca5ba5a56ee8f9d97f0"],["/re-portfolio/static/media/robotothin.5be0a3f7.woff","5be0a3f75d80c40852e9905d93b2c572"],["/re-portfolio/static/media/robotothin.c9496726.woff2","c94967264b19ee87fd1274bb5ee4001f"],["/re-portfolio/static/media/robotothinitalic.26062cce.ttf","26062cce8d0c383a7524468d147b404e"],["/re-portfolio/static/media/robotothinitalic.9b557051.woff2","9b557051d93524b35c3d76c7ef3a8538"],["/re-portfolio/static/media/robotothinitalic.d1c3b38f.woff","d1c3b38fac60f9b93c3ceca810115766"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var o=new URL(e);return"/"===o.pathname.slice(-1)&&(o.pathname+=t),o.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,o,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(o)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var o=new URL(t).pathname;return e.some(function(e){return o.match(e)})},stripIgnoredUrlParameters=function(e,o){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return o.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],o=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,o,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(o){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!o.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var o=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!o.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,o=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(o))||(o=addDirectoryIndex(o,a),e=urlsToCacheKeys.has(o));var r="/re-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(o=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(o)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(o)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});