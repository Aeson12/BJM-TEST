const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "https://Aeson12.github.io/BJM-TEST/index.html",       // Adjust for GitHub Pages
  "https://Aeson12.github.io/BJM-TEST/styles.css",
  "https://Aeson12.github.io/BJM-TEST/script.js",
  "https://Aeson12.github.io/BJM-TEST/manifest.json",
];


// Install Service Worker and Cache Files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return cache.add(url).catch((error) => {
            console.error(`Failed to cache ${url}:`, error);
          });
        })
      );
    })
  );
});

// Handle Fetch Requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          console.error("Failed to fetch:", event.request.url);
        })
      );
    })
  );
});

// Handle Push Notifications
self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon || "./icons/icon-192x192.png",
  });
});
