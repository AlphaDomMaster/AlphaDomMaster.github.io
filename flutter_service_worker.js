'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8b9f22f37ba249dd5bc6582f98514a23",
".git/config": "6b9409891d1a9c00d689807a0f8e0fc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f2f8b2f1eaf866ca0a4f890fb1879ce4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a5cce438d2bc57b477086bcdc38b18fa",
".git/logs/refs/heads/main": "76870619199de04dc3ddbb4ce938de8e",
".git/logs/refs/remotes/origin/main": "3617935b56cba89757f6ec1f149a4619",
".git/objects/02/d53b99b94b6477438e1bd096f0d764c4e16cda": "35f78cc51942eb7c18002533e95147ad",
".git/objects/05/3aacf46e6861d8008d05da176c2d61b8439f90": "63cfe1a411b59918202b369fe2cb3f55",
".git/objects/05/ffb44bcbaa998d03f011b4d3d79abbfa9ff415": "3ecb24602905bc939f3b42c475efee86",
".git/objects/0e/220bd2d6ec71063654dc29be714aa8269094ba": "cad71e585aeee8dc21032dfe6abb315c",
".git/objects/18/4d8c07b7dff66404991de91596fa7e7f43810f": "27b4895ab74c20770ec5933bc65d9232",
".git/objects/1c/dfdd564583d31b995acc8ac925de7ac5a258e9": "07924b2c362cdd2380792645b01e6b8b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/a7f8c1dae0dbcd7ffbaa71363332efbdab2874": "046f4f74a299e1ad2a51180c5bdcf940",
".git/objects/4a/ae1607be69115c9d1ff48ed21385f46084eba5": "7a5de67e6fdf406fd6b380475fe048b1",
".git/objects/4f/79b9fe529844b092e452c704ab63f0e9319810": "d2e653fc9f1067334b4a5beb8c922297",
".git/objects/50/4c95abf7100d77682b6d2c87200d698f688532": "9ea162b3368ab5e44376d2ca476b4742",
".git/objects/51/02751bc27d11ad6f095f782d219215f5862ebe": "bb1865ffc6b5a4fb847fdeb4589324b9",
".git/objects/53/5812f0f7a87931e3d36a3f23d85c16e89b45e5": "8eaa64628e27f11135880250076415d2",
".git/objects/53/a42396c4c572d72d5b1359c21aec8e3b00f0a9": "a15f765dcd725cfff010c25a805c06d6",
".git/objects/59/fd7b5988122da6ab3ca98cac493190e89f99ea": "2551e3b199febb21538e0274e45d4011",
".git/objects/5f/7385b6337190b9a37b22b52342b8b04a2962fe": "ac7f24e6a14fb6ef73490bea2cc11715",
".git/objects/6a/a30b6acc4dbc0a0d1894fb8db325107d2b8f7b": "c59628456eba657e95b5f442ea54a239",
".git/objects/6f/4e3e14ee32332e25cca8f0a2a48e2fe789b3ec": "13ea23737b5ccf7e4e3ea98256bd877f",
".git/objects/7d/80283c783876e691f128038704931c79957dd8": "cba9566836d3dcb50d76300ee32a1158",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7434b9d7e5b6c761ab8c9d53695c1161731881": "22aaf74b60bf389eee959cc0b92c7579",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/d56ae0e7c09abe61c8aa3de9105bbb04029ea2": "391cc0c43989538e53b23ffd91e1576d",
".git/objects/90/3f0528d06e4352e44872c61e0008aa34404a91": "430af0e9e86981f749a809d76462afac",
".git/objects/99/fb06e80e8c8b7739d7b4fda88c4b8a673c7c44": "03d778a247118442f0ea92db91f3c0d1",
".git/objects/9b/7188bde3a319ff1da1e64df074c8f5dba4ec36": "bec7e10bbbbc88ce99f33b7958a5d87e",
".git/objects/a6/6cf58ee1c66e5a525d3ebad5aded58b8942a0a": "82e7362231010eb6359bb56f7bb8c5f8",
".git/objects/a6/ae9c1ac46595ae574d26a7c9bab63f08d99efd": "d014b8086806b588b28760b505ab626d",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b3/3adeaddba70fdb3e73bc80f553582e889df3f9": "2f2a67cd0165f276bfc83f97cc968285",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/977a67faabe4d62a19f25d28a9df60eba1b03b": "73183f992571618bfa8063b7d715cea2",
".git/objects/c1/37acb0ff73585ddd1fc5808fe99ad2937c1a56": "e43e26323f0e38c4b1895cc21fba5fb1",
".git/objects/c2/b68af4caad518a8907b0143fa38885ff73b8da": "c096a1deb41d7ef93bfffd90d23c8bb1",
".git/objects/c3/2b6acda54ed274faa754767c354d3a9c81b4a3": "f46259c860d882f2be295869a80e3675",
".git/objects/c9/1e971d4e9672fded8eb6b71e2d308e9f16ae1e": "bf6e2f018cd08291ecacc0b165effb08",
".git/objects/df/f9ca1814d2be5950491c39c7ecd8e514490e19": "f96daa9c11cd7c1fcb225b1cbd01eaf1",
".git/objects/ee/8647f1f90662c8217d36ab58889e0f9a7540a3": "5a6cdfb3aa1bc109e56b1af86134693d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/ORIG_HEAD": "3f7aaaa563e65b8d9364da6b494c2c84",
".git/REBASE_HEAD": "3f7aaaa563e65b8d9364da6b494c2c84",
".git/refs/heads/main": "b9335744f475a704af4f1d9d06378976",
".git/refs/remotes/origin/main": "b9335744f475a704af4f1d9d06378976",
"assets/AssetManifest.json": "cd7db28b8046d87ab7fee4ae433f3183",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "1a1a741465971411526ffa204199ddd5",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "83c920f0a5f553e0070f20bf123c6926",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "a056ad1cc1016e9cbe06f86eb6f4c08e",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "558111fb70bdbea5f16bf9bfb77af331",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "683bb67b227a2257db0b60414490522f",
"/": "683bb67b227a2257db0b60414490522f",
"main.dart.js": "65c52233a4f7f9bbbd67058cff72769e",
"manifest.json": "794e258d7d4364d569b8b6d2bbc7d211",
"README.md": "b7f24a835c5b1fa54605e598ec961875",
"version.json": "2dfe7557a1a604534c28f8b0f5fc3906"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
