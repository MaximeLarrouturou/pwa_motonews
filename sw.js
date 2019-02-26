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
        }).catch(err => {
            console.log(`${evt.request.url} fetch depuis le service worker`);
            return caches.match(evt.request);
         })
    );
});

//Notification du service worker, pour accepté/refusé la 'shownotification'//
self.registration.showNotification('Bienvenue sur MotoNews', {
    body:'Tous sur les grands prix moto',
    icon:'images/icons/icon-72x72.png', 
    actions: [
        {action: 'accept', title: 'Accepté'},
        {action: 'refuse', title:'Refusé'}
    ]
});

self.addEventListener('notificationclose', evt => {
    console.log('notification fermée', evt);
});

self.addEventListener('notificationclick', evt => {
    if(evt.action === 'accept') {
        console.log('vous avez accepté');
    } else if(evt.action === 'refuse') {
        console.log('vous avez refusé')
    } else {
        console.log('vous avez cliqué sur la notification (pas sur un des boutons)')
    }
    evt.notification.close();
});

//Ecouter un événement 'push', qui se produiré si un push server nous envoi une notification  
self.addEventListener('push', evt =>  {
    console.log(evt);
    console.log('data envoyée par la push notification des dev tools : ', evt.data.text())
    var title = evt.data.text();
    evt.waitUntil(self.registration.showNotification(title, { body: 'ça marche :)', image: 'images/icons/icon-152x152.png'}));
});
