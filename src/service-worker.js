//FLAVIO BRAVO CODIGO

workbox.core.setCacheNameDetails({prefix: "quote-app"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', e => {

  workbox.routing.registerRoute(
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'APP_SHELL',
    })
  );

  workbox.routing.registerRoute(
    'service-worker.js',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'APP_SHELL',
    })
  );

  workbox.routing.registerRoute(
    'img/icons/favicon-32x32.png',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'APP_SHELL',
    })
  );

});

/*self.addEventListener( 'fetch', e => {

  console.log('Event Fetch: ',e.request.url);

});*/

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
