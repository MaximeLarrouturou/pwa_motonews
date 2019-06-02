/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_superbike_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/superbike.html */ \"./src/pages/superbike.html\");\n/* harmony import */ var _pages_superbike_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_superbike_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_add_moto_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/add_moto.html */ \"./src/pages/add_moto.html\");\n/* harmony import */ var _pages_add_moto_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_add_moto_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_add_sbk_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/add_sbk.html */ \"./src/pages/add_sbk.html\");\n/* harmony import */ var _pages_add_sbk_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_add_sbk_html__WEBPACK_IMPORTED_MODULE_2__);\n\n\n //import '../css/style.css';\n\nfunction urlBase64ToUint8Array(base64String) {\n  var padding = '='.repeat((4 - base64String.length % 4) % 4);\n  var base64 = (base64String + padding).replace(/\\-/g, '+').replace(/_/g, '/');\n  var rawData = window.atob(base64);\n  var outputArray = new Uint8Array(rawData.length);\n\n  for (var i = 0; i < rawData.length; ++i) {\n    outputArray[i] = rawData.charCodeAt(i);\n  }\n\n  return outputArray;\n}\n\nif (navigator.serviceWorker) {\n  navigator.serviceWorker.register('./sw.js').then(function (registration) {\n    // public vapid key generate with web-push command line \n    var publicKey = 'BLKHcf6jHGxPAtFotj3iQ-Vvc_w4qx6zPbuJ-hnQqI1s-CT607OyDBDQ6c7QpksvKeOwdNH5VL8MxNuOftJS8E0';\n    registration.pushManager.getSubscription().then(function (subscription) {\n      if (subscription) {\n        console.log('subscription', subscription); // no more keys proprety directly visible on the subscription objet. So you have to use getKey()\n\n        var keyArrayBuffer = subscription.getKey('p256dh');\n        var authArrayBuffer = subscription.getKey('auth');\n        var p256dh = btoa(String.fromCharCode.apply(null, new Uint8Array(keyArrayBuffer)));\n        var auth = btoa(String.fromCharCode.apply(null, new Uint8Array(authArrayBuffer)));\n        console.log('p256dh key', keyArrayBuffer, p256dh);\n        console.log('auth key', authArrayBuffer, auth);\n        extractKeysFromArrayBuffer(subscription);\n        return subscription;\n      } else {\n        // ask for a subscription \n        var convertedKey = urlBase64ToUint8Array(publicKey);\n        return registration.pushManager.subscribe({\n          userVisibleOnly: true,\n          applicationServerKey: convertedKey\n        }).then(function (newSubscription) {\n          // TODO post to a subscription DB\n          console.log('newSubscription', newSubscription); // no more keys proprety directly visible on the subscription objet. So you have to use getKey()\n\n          var key = subscription.getKey('p256dh');\n          var auth = subscription.getKey('auth');\n          console.log('p256dh key', key);\n          console.log('auth key', auth);\n          extractKeysFromArrayBuffer(subscription);\n          return subscription;\n        });\n      }\n    });\n  })[\"catch\"](function (err) {\n    return console.error('service worker NON enregistré', err);\n  });\n} //Notifiaction dite \"non persistante\"//\n//Cette méthode est utilisée pour demander à l'utilisateur s'il autorise la page à afficher des notifications.\n//PROPRIETES STATIQUES//\n//Une chaîne représentant l'autorisation actuelle d'afficher des notifications. \n//Les valeurs possibles sont les suivantes: \n//denied(l'utilisateur refuse l'affichage des notifications), \n//granted(l'utilisateur accepte d'afficher les notifications) \n//ou default(le choix de l'utilisateur est inconnu et, par conséquent, le navigateur agira comme si la valeur était refusée).\n//\n//if (window.Notification && window.Notification !== 'denied') {\n//    Notification.requestPermission(perm => {\n//        if(perm === 'granted') {\n//            const options = {\n//                body:'Tous sur les grands prix moto',\n//                icon:'images/icons/icon-72x72.png'\n//            };\n//            const notif = new Notification('Bienvenue sur MotoNews', options);\n//        } else {\n//            console.log('autorisation de recevoir des notification réfusée');\n//        } \n//    })\n//}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/pages/add_moto.html":
/*!*********************************!*\
  !*** ./src/pages/add_moto.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./pages/add_moto.html\";\n\n//# sourceURL=webpack:///./src/pages/add_moto.html?");

/***/ }),

/***/ "./src/pages/add_sbk.html":
/*!********************************!*\
  !*** ./src/pages/add_sbk.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./pages/add_sbk.html\";\n\n//# sourceURL=webpack:///./src/pages/add_sbk.html?");

/***/ }),

/***/ "./src/pages/superbike.html":
/*!**********************************!*\
  !*** ./src/pages/superbike.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./pages/superbike.html\";\n\n//# sourceURL=webpack:///./src/pages/superbike.html?");

/***/ })

/******/ });