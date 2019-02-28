const motosDiv = document.querySelector('#motos');


//
//La database est retirer, pour que le fichier db.json joue son rôle avec un run de jsonserver
//

//let motos = [
//    {id: 1, name: 'MotoGP', description: 'Toutes les dernières news concernant le Championnat du Monde moto. Tous les pilotes, résultats, calendrier, courses et circuits de chaque Grand Prix', url: 'http://www.motogp.com/fr'},
//    {id: 2, name: 'WorldSBK', description: 'Championnat du monde SuperBike', url: 'http://www.worldsbk.com/fr'},
//    {id: 3, name: 'Motorsport', description: 'Tous sur la moto - Actualités, classements, résultats des courses, statistiques, photos', url: 'https://fr.motorsport.com/category/moto/'},
//    {id: 4, name: 'FFM', description: 'Championnat de France Supermotard', url: 'https://www.supermotard-france.fr/'}
//];

function loadTechnologies(motos) {
    //On ajoute le fetch('http://localhost:3001/motos') pour qu'il fasse une requête sur l'URL du serveur (pour ce cas sur db.json qui est sur port 3001)
    fetch('http://localhost:3001/motos')
        //
        // La promesse est envoyé
        //
        .then(response => { //envoi de la promesse
            response.json() // réponse à la promesse du JSON
                .then(motos => { //si la promesse est résolu il envoi le JSON
                    const allMotos = motos.map(t => `<div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"><div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__title"><h2 class="mdl-card__title-text">${t.name}</h2></div><div class="mdl-card__supporting-text">${t.description}</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="${t.url}">site de ${t.name}</a></div><div class="mdl-card__menu"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">share</i></button></div></div></div>`)
                        .join('');

                    motosDiv.innerHTML = allMotos;
                    console.log('Liste de  motos ', motos);
                });
        })
        // Si motos est rejetée
        .catch(console.error);


}

loadTechnologies(motos);

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