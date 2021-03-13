import 'regenerator-runtime/runtime'
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'
import { cleanupOutdatedCaches } from 'workbox-precaching/cleanupOutdatedCaches'
import { skipWaiting } from 'workbox-core/skipWaiting'
import { clientsClaim } from 'workbox-core/clientsClaim'
import { setCacheNameDetails } from 'workbox-core/setCacheNameDetails'
import { registerRoute } from 'workbox-routing/registerRoute'
import { CacheFirst } from 'workbox-strategies/CacheFirst'
import { StaleWhileRevalidate } from 'workbox-strategies/StaleWhileRevalidate'
import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin'

skipWaiting()
clientsClaim()

setCacheNameDetails({
  prefix: 'Hunger-V3',
  precache: 'precache',
  runtime: 'runtime'
})
precacheAndRoute(self.__WB_MANIFEST, { ignoreURLParametersMatching: [/.*/] })

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|search|detail))/,
  new StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        maxEntries: 100
      })
    ]
  })
)

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
)

cleanupOutdatedCaches()
