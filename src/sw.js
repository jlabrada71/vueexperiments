importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
  console.log('Yay! Workbox is loaded 🎉');
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
