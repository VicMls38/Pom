const cacheName = 'mon-site-cache-v1';
const cacheFiles = [
  '/',
  '/public/css/style.css',  // Mettez à jour selon votre structure de fichiers
  'server.js',     // Mettez à jour selon votre structure de fichiers
  '/img/icon.png'                // Mettez à jour selon votre structure de fichiers
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheFiles))
      .catch(error => console.error('Erreur lors de la mise en cache des ressources:', error))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(error => console.error('Erreur lors de la récupération des ressources:', error))
  );
});
