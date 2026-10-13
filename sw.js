/* BYLD Quotations: lets the site install as an app. Always fetches the newest version first;
   the saved copy is only used when there's no internet. Quotation data never goes through here. */
const CACHE = "byld-quotes-v1";
const SHELL = ["./", "./index.html", "./firebase-config.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;           // Firebase, Dropbox, email: straight to the network
  e.respondWith(fetch(r).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
});
