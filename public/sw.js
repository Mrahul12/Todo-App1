// todo create cach verision manually
const Version = "first-version-v1";
const assetsFile = [
  "/",
  "/index.html",
  "/static/css/main.92447845.css",
  "/static/js/main.f8ea3893.js",
  "/static/js/bundle.js",
  "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",
  "/manifest.json",
  "/Logo.png",
];

// ! step-2 installation state

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(Version)
      .then((cache) => {
        // console.log(cache);
        console.log("Successfully installation.");
        cache.addAll(assetsFile);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.err("failed installation", err))
  );
});

// ! step-3 Activation state
self.addEventListener("activate", (e) => {
  console.log("Serviceworker activate");
  self.skipWaiting();

  e.waitUntil(
    caches.keys().then((keyList) => {
      // console.log(keyList);
      return Promise.all(
        keyList.map((key) => {
          // console.log(key);
          if (key === Version) {
            return;
          }
          return caches.delete(key);
        })
      );
    })
  );
});

//  fetch data at the server

self.addEventListener("fetch", (e) => {
  console.log("Service worker fetching now");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

// console.log('Fetch');
// caches.match(e.request).then((response) => {
//   if (response) {
//     return response;
//   } else {
//     return "no send response";
//   }
//   return fetch(e.request)
//     .then((response) => {
//       //check we receive valid response
//       if (!response || response.status !== 200 || response.type !== "basic") {
//         return response;
//       } else {
//         return "fetch request error";
//       }
//       const cacheToResponse = response.clone();
//       caches.open(Version).then((cache) => {
//         cache.put(e.request, cacheToResponse);
//       });
//       return response;
//     })
//     .cache((err) => caches.match(e.request).then((res) => res));
// });
