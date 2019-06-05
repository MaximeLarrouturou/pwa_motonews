<img src="repository-open-graph-template[MotoNews].jpg"/>

# Progressiv Web App - Moto News

## npm run jsonserver
  * If **jsonserver** don't run, so use command line `npm install -g json-server`.
  * Using **live-server**, your browser refreshed automatically, use command line `npm install -g live-server`.

## npm start
  * If npm start don't run, so use command line `npm install`.

## Procèdure de Développement de la PWA
  
1. Création de l'application destinée à devenir une PWA
> Récupération du code source et configuration d'un serveur live-server  

> Créer une API REST à l'aide de json-server

2. Le Service Worker
> Enregistrement d'un service worker  

> Interception de requêtes HTTP par un service worker

3. Gestion du cache
> Détection de l'état de la connexion internet et affichage d'une page d'information  

> A propos des erreurs durant la frappe  

> **CacheStorage :** un 'store' pour les instances de cache + création d'instances  

> **Cache API :** utilisation d'une instance de cache, mettre des fichiers en cache  

> Gérer la mise en cache depuis le service worker  

> Revue du code permettant de poster une nouveau post  

> Récupérer les réponses depuis le cache  


4. Gestion avancée du cache
> Stratégie de récupération en cache, puis réseau si le contenu n'est pas cache  

> Répondre à une requête en faisant servir par le service worker le cache (suite)  

> Stratégie de récupération sur le réseau puis en cache si réseau non accessible  

> S'assurer que le service worker reste actif à l'aide de `waitUntil()`  

> Supprimer les anciennes instances de cache

5. Rendre votre application web installable
> Création du fichier `manifest.json`

6. Notifications
> Notifications non persistantes (depuis `index.js`)  

> Options des notifications  

> Notifications persistantes (envoyées depuis le service worker)  

> Options de notifications grâce aux actions  

> Fermer programmatiquement une notification

7. Les notifications push
> Intercepter une notification push et afficher son contenu dans une notification  

> Architecture  

> Génération de vapid keys  

> Récupération ou création d'une souscription auprès d'un push service  

> Envoyer une notification push depuis Node

8. Background Sync
> Infrastructure utilisation de Mongodb, mongoose, body-parser et express.  

> body-parser : `npm install body-parser`, express: `npm install express`, mongoose: `npm install mongoose`, mongodb: `npm install mongodb --save`  

> Background Sync côté Service Worker avec indexDb

9. Faire un audit de la PWA et améliorer le score
> Correction de bugs en production puis audit  

> Améliorer le score d'audit  

> Améliorer le score d'audit en corrigeant le problème de taille de viewport

# Config webpack

## Generated a package.json
* Using `npm init -y` and file `package.json` will be created.

## Installed package webpack and webpack-cli
* Using `npm install webpack webpack-cli --save-dev`

## Zero configuration (webpack)
* Created a folder `src` and create files html, js, css… or placed files existing
* Launch `npm run build`
* A folder dist will be created, a file .js is created for `npm run build`.
 
 ## Decompress a file .js 
 * In file `package.json`, at the level object "scripts" add `"build": "webpack --mode development"`
 * Add a callback file .js in html `<script src="../dist/file.js"></script>`

## Installed a server webpack
* Usin `npm install webpack-dev-server --save-dev`.
* In file `package.json`, at the level object "scripts" again add `"dev": "webpack-dev-server --mode development --watch"`.

## Customize a configuration webpack
* Created file a root folder `webpack.config.js`
`const path = require('path');`
```module.exports = {
    entry: './src/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        ]
    }
```
* Add modules (webpack.config.js)
```module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
```
* Rename callback a file.js

## Babel
* Installed babel loader, use `npm install -D babel-loader @babel/core @babel/preset-env`
* Create file at the level root `.babelrc`
* Add  ```{
    "presets": [
        "@babel/preset-env"
    ]
}```

## Use import dynamic
  * In `.babelrc` paste `"plugins": ["@babel/plugin-syntax-dynamic-import"]`. 
  And Install `npm install --save-dev @babel/plugin-syntax-dynamic-import`

## css-loader & style-loader
* Add a new rules (webpack.config.js)
```{
                test:/\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
```
* Installed `npm install --save-dev css-loader` more `npm install style-loader --save-dev`
* If used SASS install `npm install sass-loader node-sass --save-dev`
* Add rules (webpack.config.js)
```{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
```
## Used Plugin Webpack
* Add variable (webpack.config.js)
1. `const webpack = require('webpack');`
2. `const HtmlWebpackPlugin = require('html-webpack-plugin');`

* Add object plugins (webpack.config.js)
```plugins:[
        new webpack.ProgressPlugin(handler)
        })
    ]
```
* Add function 
```const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.info(percentage, message, ...args);
 };
```
* Customize handler 
```const handler = (percentage, message, ...args) => {
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    const argsOrDefault = (args.length === 0) ? "" : args.join(' | ');
    console.info(`${percent}%`, msg, argsOrDefault);
  };
  ```
## Using import pluging
* First step install HTML Webpack Plugin `npm install --save-dev html-webpack-plugin`
* Call plugin (webpack.config.js), `const HtmlWebpackPlugin = require('html-webpack-plugin');`
* Rewrite object plugins
```plugins:[
        new webpack.ProgressPlugin(handler),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'webpack 4 :)',
            template: './src/index.html'
        })
    ]
```
* Change `<title>` index.html at the level src `<%= htmlWebpackPlugin.options.title %>`

## Generate a hash title if necesary
* At the level webpack.config.js, change a filename, `[chunkhash.js]`
* A bundle.js auto update file .js