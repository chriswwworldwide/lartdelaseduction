/* =====================================================
   Progressive Web Enhancement: Service Worker
   ===================================================== */

const CACHE_NAME = "seductionstore-v1";

const ASSETS_TO_CACHE = [
    "/",                   // root
    "/homepage.html",      // main page
    "/styles/main.css",    // update if you use a different main CSS file
    "/scripts/main.js",    // update if your main JS is named differently
    "/images/logo.png",
    "/favicon.ico"
];

// ---- INSTALL ----
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// ---- ACTIVATE ----
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => key !== CACHE_NAME && caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// ---- FETCH ----
self.addEventListener("fetch", (event) => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin !== location.origin) return;

    // Network‑first for navigation requests
    if (req.mode === "navigate") {
        event.respondWith(
            fetch(req).catch(() => caches.match("/homepage.html"))
        );
        return;
    }

    // Cache‑first strategy for static assets
    if (req.url.match(/\.(css|js|png|jpg|jpeg|webp|avif|ico)$/)) {
        event.respondWith(
            caches.match(req).then(
                (cached) =>
                    cached ||
                    fetch(req).then((res) => {
                        const copy = res.clone();
                        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
                        return res;
                    })
            )
        );
    }
});