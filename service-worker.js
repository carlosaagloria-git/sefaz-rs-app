
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sefaz-rs-cache').then(cache => {
      return cache.addAll([
        './SEFAZ_RS_PWA.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
