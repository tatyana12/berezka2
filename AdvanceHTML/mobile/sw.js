const staticAssets=[
    './',
    './style.css',
    './app.js',
    'images/lightblue.jpg',
    'images/lightgold.jpg',
    'images/icon-192x192.png',
    'images/icon-256x256.png',
    'images/icon-384x384.png',
    'images/icon-512x512.png',
    'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
    'http://code.jquery.com/jquery-1.7.1.js'
];

self.addEventListener('install', async event =>{
    const cache = await caches.open('pwa-static');

    console.log('install');

});
self.addEventListener('fetch', event =>{
    const req=event.request;
    const url = new URL (req.url);

    if(url.origin === location.origin){
        event.respondWith(cacheFirst(req));
    }else{
        event.respondWith(networkFirst(req));
    }

});
async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req){
    const cache = await caches.open('pwa-dynamic');


    try{
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;

    }catch(error){
        return await cache.match(req);
    }
}
//
