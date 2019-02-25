<h1>Démarrer le projet avec deux lancement de consoles</h1>
<p>1<sup>er</sup> npm run jsonserver</p>
<p>2<sup>nd</sup> npm start</p> 

<h2>1) Création de l'application destinée à devenir une PWA </h2>
  <p>- Récupération du code source et configuration d'un serveur live-server</p>
  <p>- Créer un API REST à l'aide de json-server</p>
<h2>2) Le Service Worker </h2>
  <p>- Enregistrement d'un service worker</p>
  <p>- Interception de requêtes HTTP par un service worker</p>
<h2>3) Gestion du cache</h2>
  <p>- Détection l'état de la connexion internet et affichage d'une page d'information</p>
  <p>- A propos des erreurs durant la frappe</p>
  <p>- CacheStorage : un 'store' pour vos instances de cache + création d'instances</p>
  <p>- Cache API : utilisation d'une instance de cache, mettre des fichiers en cache</p>
  <p>- Gérer la mise en cache depuis le service worker</p>
  <p>- Revue du code permettant de poster une nouvelle techno</p>
  <p>- Récupérer les réponses depuis le cache</p>
<h2>4) Gestion avancée du cache</h2>
  <p>- Stratégie de récupération en cache, puis réseau si le contenu n'est pas cache</p>
  <p>- Répondre à une requête en faisant servir par le service worker le cache (suite)</p>
  <p>- Stratégie de récupération sur le réseau puis en cache si réseau non accessible</p>
  <p>- S'assurer que le service worker reste actif à l'aide de waitUntil()</p>
  <p>- Supprimer les anciennes instances de cache</p>
<h2>5) Rendre votre application web installable</h2>
  <p>- Création du fichier manifest.json</p>
<h2>6) Notifications</h2>
  <p>- Notifications non persistantes (depuis main.js)</p>
  <p>- Options des notifications</p>
  <p>- Notifications persistantes (envoyées depuis le service worker)</p>
  <p>- Options de notifications grâce aux actions</p>
  <p>- Fermer programmatiquement une notification</p>
<h2>7) Les notifications push</h2>
  <p>- Intercepter une notification push et afficher son contenu dans une notification</p>
  <p>- Architecture</p>
  <p>- Génération de vapid keys</p>
  <p>- Récupération ou création d'une souscription auprès d'un push service</p>
  <p>- Envoyer une notification push depuis Node</p>
<h2>8) Background Sync</h2>
  <p>- Infrastructure</p>
  <p>- Background Sync côté Service Worker</p>
<h2>9) Faire un audit de votre PWA et améliorer votre score</h2>
  <p>- Correction de bugs en production puis audit</p>
  <p>- Améliorer votre score d'audit</p>
  <p>- Améliorer votre score d'audit en corrigeant le problème de taille de viewport</p>
