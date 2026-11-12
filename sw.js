/* RigOps — service worker
   Tiene l'app disponibile anche senza rete (in cantiere capita spesso).
   ⚠️ Alzare VERSIONE a ogni pubblicazione, altrimenti i telefoni
   continuano a mostrare la versione vecchia presa dalla cache. */
const VERSIONE = 'rigops-v7';
const FILE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/marchio.png'
];

/* GitHub dichiara ogni file "buono per 10 minuti", e il browser si fida: tiene
   una sua scorta e non ripassa dal sito. Anche le richieste che partono da qui
   dentro passano da quella scorta, percio' un aggiornamento appena pubblicato
   poteva non arrivare sul telefono. `cache: 'reload'` salta la scorta e va
   dritto al sito. */
const inRete = u => new Request(u, { cache: 'reload' });

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSIONE)
      .then(c => c.addAll(FILE.map(inRete)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(x => x !== VERSIONE).map(x => caches.delete(x))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Meteo e ricerca indirizzi devono sempre andare in rete, mai dalla cache.
  if (url.origin !== location.origin) return;
  // La pagina e il suo contorno (codice, manifest, immagini del marchio) si
  // chiedono sempre al sito. Il resto puo' passare dalla scorta del browser.
  const sempreFresco = e.request.mode === 'navigate'
    || /\.(html|js|webmanifest|png)$/i.test(url.pathname);
  e.respondWith(
    fetch(sempreFresco ? inRete(e.request.url) : e.request)
      .then(r => {
        const copia = r.clone();
        caches.open(VERSIONE).then(c => c.put(e.request, copia)).catch(() => {});
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
