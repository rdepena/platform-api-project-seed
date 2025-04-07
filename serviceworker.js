// Mozilla Service Worker Cookbook 'network or cache' recipe: https://serviceworke.rs/strategy-network-or-cache.html
const CACHE = 'network-or-cache';

self.addEventListener('install', evt => {
    console.log('The service worker is being installed.');
    evt.waitUntil(precache());
});

self.addEventListener('fetch', evt => {
    console.log('The service worker is serving the asset.');
    evt.respondWith(
        fromNetwork(evt.request, 400).catch(() => {
            return fromCache(evt.request);
        })
    );
});

function precache() {
    return caches.open(CACHE).then(cache => {

            return cache.addAll([
                'platform-window.html',
                'provider.html',
                'favicon.ico',
                'color-view.html',
                'js/color-view.js',
                'js/external-window-snapshot.js',
                'js/layout-form.js',
                'js/left-menu.js',
                'js/platform-provider.js',
                'js/platform-window.js',
                'js/snapshot-form.js',
                'js/template-store.js',
                'js/title-bar.js',
                'styles/frame-styles-template.css',
                'styles/frame-styles.css',
                'styles/light-theme.css'
            ]);
        //'node_modules/lit-html/lit-html.js'
    });

}

function fromNetwork(request, timeout) {
    return new Promise((fulfill, reject) => {
        const timeoutId = setTimeout(reject, timeout);
        fetch(request).then(response => {
            clearTimeout(timeoutId);
            fulfill(response);
        }, reject);
    });
}

function fromCache(request) {
    return caches.open(CACHE).then(cache => {
        return cache.match(request).then(matching => {
            return matching || Promise.reject('no-match');
        });
    });
}
