'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"iot_01_pages/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"iot_01_pages/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"iot_01_pages/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"iot_01_pages/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"iot_01_pages/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"iot_01_pages/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"iot_01_pages/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"iot_01_pages/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"iot_01_pages/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"iot_01_pages/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"iot_01_pages/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"iot_01_pages/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"iot_01_pages/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"iot_01_pages/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"iot_01_pages/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"iot_01_pages/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"iot_01_pages/.git/objects/pack/pack-b3180d7f18a1e7c759fb7ae883cb3c1c6041b9b3.pack": "19d4d8e1e3b302bc159cf9a9ca71492f",
"iot_01_pages/.git/objects/pack/pack-b3180d7f18a1e7c759fb7ae883cb3c1c6041b9b3.rev": "5f87d51e979153ae598a5cce7f3abe84",
"iot_01_pages/.git/objects/pack/pack-b3180d7f18a1e7c759fb7ae883cb3c1c6041b9b3.idx": "2747c9688aa81dff2bdbf3cca1d0c95f",
"iot_01_pages/.git/objects/51/57b49ff18d5cc8a2dd1ff7c7e04312a64d55c9": "59e4c9085da693d91b747de4f73bbe5e",
"iot_01_pages/.git/objects/7a/ad4aec6408a4c8d494f37bad67c9a49e1c7b43": "68723923677888dfeb1989825aee55fc",
"iot_01_pages/.git/objects/0d/d77293fa6872a54521f3c785bfad9ec4dc30d2": "642990e80dce5314149906c8d6fe72b8",
"iot_01_pages/.git/objects/9e/8bd2a70eb179928ea46ffda6e76303a3397299": "80f857dd3233eb1efbb6ace775d272b8",
"iot_01_pages/.git/objects/54/4a5c52e9b4c6c9fd2ea7ae8ea35e7a084ae56a": "041aebe04ce4e8206c080a52f65ccecc",
"iot_01_pages/.git/objects/53/bdb489c2ea48cee6e122adaad3d34e522ea634": "ce57127edc47f2faba61286ae2064084",
"iot_01_pages/.git/refs/heads/main": "cf6b8d7e624f3389aaf4511b56597dca",
"iot_01_pages/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"iot_01_pages/.git/refs/remotes/origin/main": "cf6b8d7e624f3389aaf4511b56597dca",
"iot_01_pages/.git/packed-refs": "b1a2705b29f0f46e2799df8296b8fe06",
"iot_01_pages/.git/logs/refs/remotes/origin/HEAD": "48236113a95994f76f2a6f4b0c614c79",
"iot_01_pages/.git/logs/refs/remotes/origin/main": "055b732805f9091ca3545f8038f9c006",
"iot_01_pages/.git/logs/refs/heads/main": "c6ed920cc10af31a5b13402d6d3c2be6",
"iot_01_pages/.git/logs/HEAD": "c6ed920cc10af31a5b13402d6d3c2be6",
"iot_01_pages/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"iot_01_pages/.git/config": "cf2dd9122473f81d0a581bf096cbf92b",
"iot_01_pages/.git/COMMIT_EDITMSG": "1f6e6b7f8901fbc4b27ca93dddcf926c",
"iot_01_pages/.git/index": "77adbc549ecdad82eec869156bd56367",
"iot_01_pages/canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"iot_01_pages/canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"iot_01_pages/canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"iot_01_pages/canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"iot_01_pages/canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"iot_01_pages/canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"iot_01_pages/canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"iot_01_pages/canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"iot_01_pages/canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"iot_01_pages/canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"iot_01_pages/canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"iot_01_pages/canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"iot_01_pages/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"iot_01_pages/assets/fonts/MaterialIcons-Regular.otf": "cff54572519754b7c9b838ec157f9db9",
"iot_01_pages/assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"iot_01_pages/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"iot_01_pages/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"iot_01_pages/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"iot_01_pages/assets/NOTICES": "78e2f755f80e823fdc1663edcf6516af",
"iot_01_pages/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"iot_01_pages/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"iot_01_pages/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"iot_01_pages/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"iot_01_pages/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"iot_01_pages/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"iot_01_pages/flutter_bootstrap.js": "9d6873e88a8ccd25a844e842398c81c9",
"iot_01_pages/index.html": "83fc293c0cea762f6b0dbb5d1408a0ec",
"iot_01_pages/main.dart.js": "0ae39872bf087dc80b0a4a1989ad3bad",
"iot_01_pages/version.json": "f38e61dce6d9f210ddd4e92b6fa8acaa",
"iot_01_pages/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"iot_01_pages/manifest.json": "7e037b954a0bb51d547d663734290408",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3a4b9e108ca17a2702c68e9678f8f9d0",
"index.html": "6f7c27e47319e5225613f059fdb23861",
"/": "6f7c27e47319e5225613f059fdb23861",
"main.dart.js": "0ae39872bf087dc80b0a4a1989ad3bad",
"version.json": "f38e61dce6d9f210ddd4e92b6fa8acaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "cff54572519754b7c9b838ec157f9db9",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/NOTICES": "78e2f755f80e823fdc1663edcf6516af",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "7e037b954a0bb51d547d663734290408"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
