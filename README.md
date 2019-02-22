Création de l'application destinée à devenir une PWA 
  Récupération du code source et configuration d'un serveur live-server
  Créer un API REST à l'aide de json-server
Le Service Worker 
  Enregistrement d'un service worker
  Interception de requêtes HTTP par un service worker
Gestion du cache
  Détection l'état de la connexion internet et affichage d'une page d'information
  A propos des erreurs durant la frappe
  CacheStorage : un 'store' pour vos instances de cache + création d'instances
  Cache API : utilisation d'une instance de cache, mettre des fichiers en cache
  Gérer la mise en cache depuis le service worker
  Revue du code permettant de poster une nouvelle techno
  Récupérer les réponses depuis le cache
Gestion avancée du cache
  Stratégie de récupération en cache, puis réseau si le contenu n'est pas cache
  Répondre à une requête en faisant servir par le service worker le cache (suite)
  Stratégie de récupération sur le réseau puis en cache si réseau non accessible
  S'assurer que le service worker reste actif à l'aide de waitUntil()
  Supprimer les anciennes instances de cache
Rendre votre application web installable
  Création du fichier manifest.json
Notifications
  Notifications non persistantes (depuis main.js)
  Options des notifications
  Notifications persistantes (envoyées depuis le service worker)
  Options de notifications grâce aux actions
  Fermer programmatiquement une notification
Les notifications push
  Intercepter une notification push et afficher son contenu dans une notification
  Architecture
  Génération de vapid keys
  Récupération ou création d'une souscription auprès d'un push service
  Envoyer une notification push depuis Node
Background Sync
  Infrastructure
  Background Sync côté Service Worker
Faire un audit de votre PWA et améliorer votre score
  Correction de bugs en production puis audit
  Améliorer votre score d'audit
  Améliorer votre score d'audit en corrigeant le problème de taille de viewport
