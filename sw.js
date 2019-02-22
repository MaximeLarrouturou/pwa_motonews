const cacheName = 'MotoNews 1.1';

self.addEventListener('install', (evt) => {
    console.log(`sw installé à ${new Date().toLocaleTimeString()}`);       
    const cachePromise = caches.open(cacheName).then(cache => {
        return cache.addAll([
            'index.html',
            'pages/superbike.html',
            'pages/add_moto.html', 
            'pages/add_sbk.html',
            'pages/contact.html',           
            'js/add_moto.js',
            'js/add_sbk.js',
            'js/contact.js',
            'js/main.js',
            'js/sbk.js',
            'css/style.css',
            'vendors/mdl.min.css',
            'vendors/mdl-font_icons.min.css',
            'vendors/mdl.js',
            'manifest.json'
        ])
        .then(console.log('cache initialisé'))
        .catch(console.err);
    });

    evt.waitUntil(cachePromise);
    
});

self.addEventListener('activate', (evt) => {
    console.log(`sw activé à ${new Date().toLocaleTimeString()}`);
    let cacheCleanedPromise = caches.keys().then(keys => {
		keys.forEach(key => {
			if(key !== cacheName) {
                return caches.delete(key);
            }
		});
	});
	evt.waitUntil(cacheCleanedPromise);    
});

self.addEventListener('fetch', evt => {

    evt.respondWith(
        fetch(evt.request).then( res => {
            // we add the latest version into the cache
            caches.open(cacheName).then(cache => cache.put(evt.request, res));
            // we clone it as a response can be read only once (it's like a one time read stream)
            return res.clone();
        })
        .catch(err => caches.match(evt.request))
    );
});