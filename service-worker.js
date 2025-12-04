self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("jkd-cache-v1").then((cache) => {
      return cache.addAll([
        "index.html",
        "home.html",
        "warmup.html",
        "techniques.html",
        "footwork.html",
        "about.html",
        "recommendation.html",
        "style.css",
        "app.js",
        "script.js",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
