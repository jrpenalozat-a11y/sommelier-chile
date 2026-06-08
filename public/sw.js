// Service worker mínimo: cache-first con actualización en segundo plano (offline básico)
const CACHE = 'somm-cl-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const red = fetch(req)
          .then((res) => {
            if (res && res.status === 200 && new URL(req.url).origin === self.location.origin) {
              cache.put(req, res.clone());
            }
            return res;
          })
          .catch(() => cached);
        return cached || red;
      })
    )
  );
});
