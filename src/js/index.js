//import '../pages/superbike.html';
//import '../pages/add_moto.html';
//import '../pages/add_sbk.html';

//import ('../css/style.css');

//import _ from 'lodash';


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
                            const key = newSubscription.getKey('p256dh');
                            const auth = newSubscription.getKey('auth');
                            console.log('p256dh key', key);
                            console.log('auth key', auth);
                        })
                }
            })
        })
        .catch(err => console.error('service worker NON enregistré', err));
}

if (window.Notification && window.Notification !== 'denied') {
    Notification.requestPermission(perm => {
        if (perm === 'granted') {
            // const options = {
            //     body: 'Je suis le body de la notification',
            //     icon: 'images/icons/icon-72x72.png'
            // }
            // const notif = new Notification('Hello notification', options);
            console.log('autorisation de recevoir des notifications acceptée')
        } else {
            console.log('autorisation de recevoir des notifications réfusée');
        }
    })
}