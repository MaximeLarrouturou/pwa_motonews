
// retrieved from https://github.com/web-push-libs/web-push readme
// and used to convert base64 string to Uint8Array == to an array buffer
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if (navigator.serviceWorker) {
    navigator.serviceWorker
        .register('sw.js')
        .then(registration => {
            // public vapid key generate with web-push command line 
            const publicKey = 'BLKHcf6jHGxPAtFotj3iQ-Vvc_w4qx6zPbuJ-hnQqI1s-CT607OyDBDQ6c7QpksvKeOwdNH5VL8MxNuOftJS8E0';
            registration.pushManager.getSubscription().then(subscription => {
                if (subscription) {
                    console.log('subscription', subscription);
                    // no more keys proprety directly visible on the subscription objet. So you have to use getKey()
                    const keyArrayBuffer = subscription.getKey('p256dh');
                    const authArrayBuffer = subscription.getKey('auth');
                    const p256dh = btoa(String.fromCharCode.apply(null, new Uint8Array(keyArrayBuffer)));
                    const auth = btoa(String.fromCharCode.apply(null, new Uint8Array(authArrayBuffer)));
                    console.log('p256dh key', keyArrayBuffer, p256dh);
                    console.log('auth key', authArrayBuffer, auth);
                    extractKeysFromArrayBuffer(subscription);
                    return subscription;
                } else {
                    // ask for a subscription 
                    const convertedKey = urlBase64ToUint8Array(publicKey);
                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: convertedKey
                    })
                        .then(newSubscription => {
                            // TODO post to a subscription DB
                            console.log('newSubscription', newSubscription);
                            // no more keys proprety directly visible on the subscription objet. So you have to use getKey()
                            const key = subscription.getKey('p256dh');
                            const auth = subscription.getKey('auth');
                            console.log('p256dh key', key);
                            console.log('auth key', auth);
                            extractKeysFromArrayBuffer(subscription);
                            return subscription;
                        })
                }
            })
        })
        .catch(err => console.error('service worker NON enregistré', err));
}

//Notifiaction dite "non persistante"//

//Cette méthode est utilisée pour demander à l'utilisateur s'il autorise la page à afficher des notifications.

//PROPRIETES STATIQUES//
    //Une chaîne représentant l'autorisation actuelle d'afficher des notifications. 
        //Les valeurs possibles sont les suivantes: 
            //denied(l'utilisateur refuse l'affichage des notifications), 
            //granted(l'utilisateur accepte d'afficher les notifications) 
            //ou default(le choix de l'utilisateur est inconnu et, par conséquent, le navigateur agira comme si la valeur était refusée).
//

//if (window.Notification && window.Notification !== 'denied') {
//    Notification.requestPermission(perm => {
//        if(perm === 'granted') {
//            const options = {
//                body:'Tous sur les grands prix moto',
//                icon:'images/icons/icon-72x72.png'
//            };
//            const notif = new Notification('Bienvenue sur MotoNews', options);
//        } else {
//            console.log('autorisation de recevoir des notification réfusée');
//        } 
//    })
//}