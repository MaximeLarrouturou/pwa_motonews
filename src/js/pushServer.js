 const webPush = require('web-push');
 //const pushServerKeys = require('../pushServerKeys');
 const pushClientSubscription = require('../../pushClientSubscription');

 webPush.setVapidDetails('mailto:larrouturoumaxime@gmail.com', "BLKHcf6jHGxPAtFotj3iQ-Vvc_w4qx6zPbuJ-hnQqI1s-CT607OyDBDQ6c7QpksvKeOwdNH5VL8MxNuOftJS8E0", "LtjaC5uCQr7cRZXwR-iNtNr33MI11JVk-jEua61XVLQ");

 const subscription = {
    endpoint: pushClientSubscription.endpoint,
    keys: {
         auth: pushClientSubscription.keys.auth,
         p256dh: pushClientSubscription.keys.p256dh
        }
 };

 console.log('sub', subscription);
 webPush.sendNotification(subscription, 'Notification envoyée depuis le serveur push Node')
    .then(res => console.log('Le push a bien été poussée', res))
    .catch(err => console.error);

 //console.log(pushServerKeys, pushClientSubscription);