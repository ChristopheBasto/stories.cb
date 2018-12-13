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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/main.js":
/*!***********************************!*\
  !*** ./assets/javascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(/*! ../../src/modules/router/router.class */ "./src/modules/router/router.class.js");

var _route = __webpack_require__(/*! ../../src/modules/router/route.class */ "./src/modules/router/route.class.js");

var _userService = __webpack_require__(/*! ../../src/services/user-service.class */ "./src/services/user-service.class.js");

var router = new _router.Router(); /**
                                    * @name main.js
                                    * @desc Point d'entrée principal dans l'application Javascript
                                    */

var userService = new _userService.UserService();
router.add(new _route.Route('/', 'LoginController', userService)).add(new _route.Route('/mystories', 'MyStories', userService));

/***/ }),

/***/ "./menu/menu.class.js":
/*!****************************!*\
  !*** ./menu/menu.class.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Menu
 * @desc Gestion du menu utilisateur
 * @author Aélion
 * @version 1.0.0
 */

var Menu = exports.Menu = function () {
    function Menu() {
        _classCallCheck(this, Menu);

        // Tableau d'objets json dont un objet est lui même un tableau d'objets json
        this.options = [{ title: 'Accueil', active: 'always' }, { title: 'Toutes les Stories', active: 'isAdmin' }, { title: 'Mes stories', active: 'always' }, {
            title: 'Mon compte', active: 'always', options: [{ title: 'Mes préférences' }, { title: 'Changer de mot de passe' }, { divider: true }, { title: 'Déconnexion' }]
        }];
    }

    /**
     * Définit l'utilisateur connecté
     * @param {*} user 
     **/

    _createClass(Menu, [{
        key: 'setUser',
        value: function setUser(user) {
            this.user = user;
            // Met à jour le menu Utilisateur
            this._update();

            // Active ou pas les options
            this._activate();
        }
    }, {
        key: '_update',
        value: function _update() {
            console.log('coucou');
            // Mise à jour de l'option du menu : (userName)
            var userMenu = $('#userMenu');
            userMenu.html(this.user.userName);

            // On définit les options du menu
            var dropdownBlock = $('#userMenuOptions');

            // Virer les options existantes
            dropdownBlock.empty();

            // Recharge les options à partir de la définition
            var userMenuOptions = this.options[3].options;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = userMenuOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;

                    var item = this._makeOption(option);
                    item.appendTo(dropdownBlock);
                }

                // En fin de parcours, on affiche le menu
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            dropdownBlock.removeClass('hidden');
        }
    }, {
        key: '_makeOption',
        value: function _makeOption(option) {
            var item = null;

            if (option.hasOwnProperty('title')) {
                // link logic here
                item = $('<a>');
                item.addClass('dropdown-item').attr('href', '#').html(option.title);
                // <a class="dropdown-item" href="#">Action</a>
            } else {
                // divider logic here
                // <div class="dropdown-divider"></div>
                item = $('<div>');
                item.addClass('dropdown-divider');
            }
            return item;
        }
    }, {
        key: '_activate',
        value: function _activate() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var option = _step2.value;

                    var item = $('[title="' + option.title + '"]');

                    if (option.active === 'always') {
                        item.removeClass('disabled');
                    } else if (option.active === 'isAdmin' && this.user.group === 'Administrateur') {
                        item.removeClass('disabled');
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return Menu;
}();

/***/ }),

/***/ "./src/modules/router/route.class.js":
/*!*******************************************!*\
  !*** ./src/modules/router/route.class.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Route
 * @desc Définition des routes de l'application
 * @author Aélion
 * @version 1.0.0
 * 
 */

var Route = exports.Route = function () {
    function Route(path, controller) {
        var canActivate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Route);

        this.path = path;
        this.controller = controller;
        this.canActivate = canActivate;
    }

    _createClass(Route, [{
        key: "getPath",
        value: function getPath() {
            return this.path;
        }
    }, {
        key: "getController",
        value: function getController() {
            return this.controller;
        }
    }, {
        key: "getCanActivate",
        value: function getCanActivate() {
            return this.canActivate;
        }
    }]);

    return Route;
}();

/***/ }),

/***/ "./src/modules/router/router.class.js":
/*!********************************************!*\
  !*** ./src/modules/router/router.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Router = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name Router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @desc Collection des routes de l'application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aélion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _route = __webpack_require__(/*! ./route.class */ "./src/modules/router/route.class.js");

var _loginController = __webpack_require__(/*! ./../../user/login/views/loginController.class */ "./src/user/login/views/loginController.class.js");

var _myStories = __webpack_require__(/*! ../../user/login/views/myStories.class */ "./src/user/login/views/myStories.class.js");

var _userService = __webpack_require__(/*! ./../../services/user-service.class */ "./src/services/user-service.class.js");

var _user = __webpack_require__(/*! ../../user/user.class */ "./src/user/user.class.js");

var _login = __webpack_require__(/*! ../../user/login.class */ "./src/user/login.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controllers = {
    LoginController: _loginController.LoginController,
    MyStories: _myStories.MyStories
};

var Router = exports.Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = new Map();

        var router = this;

        //Définit le listener sur les routes
        $(window).on('hashchange', function (event) {
            router.getRoute();
        });
        $(window).on('load', function (event) {
            router.getRoute();
        });
    }

    _createClass(Router, [{
        key: 'add',
        value: function add(route) {
            this.routes.set(route.path, route);
            return this;
        }
    }, {
        key: 'getRoute',
        value: function getRoute() {

            // Le slice vire le dièse de l'adresse url s'il y en a un sinon il ajoute un /
            var url = location.hash.slice(1) || '/';

            console.log('URL à charger [' + url + ']');

            // On va essayer de chercher si dans les routes, on a quelque chose qui correspond
            var route = this.routes.get(url);

            var controller = {};

            if (!route) {
                //Aucun contrôleur associé à cette route
            } else {
                if (url === '/') {
                    //On vérifie l'utilisateur
                    var userService = new _userService.UserService();
                    if (userService.hasUser()) {
                        //Il y a un utilisateur identifié.. donc pas de login
                        controller = new _myStories.MyStories();
                    } else {
                        //Pas encore d'utilisateur , on instancie LoginController
                        controller = new _loginController.LoginController();
                    }
                } else {
                    //La route définie est autre chose...
                    console.log('Instancie :' + route.getController());

                    var canActivate = route.getCanActivate();
                    if (canActivate) {
                        //L'instanciation requiert une vérification
                        if (canActivate.hasUser()) {
                            controller = new controllers[route.getController()]();
                        } else {
                            //On ne peut pas, sans utilisateur identifié
                            controller = new _loginController.LoginController();
                        }
                    } else {
                        //Route activable sans contrôle 
                        controller = new controllers[route.getController()]();
                    }
                }
                // A la fin, on charge la vue
                controller.getView();
            }
        }
    }]);

    return Router;
}();

/***/ }),

/***/ "./src/modules/toaster/toaster.class.js":
/*!**********************************************!*\
  !*** ./src/modules/toaster/toaster.class.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

/** 
export class Toast {
    constructor(params) {
        //Objet créé dans login.class avec const toast = new Toast
        // méthode propre aux objets : hasOwnProperty = regarde dans params s'il y a un attribut background
        //S'il ne contient pas l'attribut backgroung (négation avec le !), transmet moi 'danger' sinon transmet ce qu'il y a dans l'objet
        if (!params.hasOwnProperty('background')) {
            //Paramètres de définition de la couleur de fond du toast
            this.backgroundClass = 'danger';

        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {


            //Durée d'affichage du toast (en secondes)
            this.duration = 5;
        } else {
            this.duration = params.duration;

        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }
    }

    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }





    toastIt() {

        //Création en mémoire (avec $) d'un nouvel élément dans le DOM
        const toaster = $('<div>');

        //On lui ajoute les classes 
        toaster
            .addClass('toast')
            .addClass(this.backgroundClass)
            .addClass('animated')
            .addClass('fadeInDownBig')
            .html(this.message);

        //Ajoute le toaster au document lui-même

        toaster.appendTo($('body'));

        //Affichage pendant un certain temps
        setTimeout(
            function () {
                setTimeout(
                    function () {

                        toaster

                            .addClass('fadeOutRightBig');


                    },
                    (this.duration / 2) * 1000
                );
                toaster.remove();
            },
            //Ici, quand on arrive au bout de l'intervalle de temps
            this.duration * 1000
        );
    }
}

**/

var Toast = exports.Toast = function () {
    function Toast(params) {
        _classCallCheck(this, Toast);

        if (!params.hasOwnProperty('background')) {
            // Paramètre de définition de la couleur de fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast (en secondes)
            this.duration = 7;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }

        if (!params.hasOwnProperty('height')) {
            this.height = params.height + 'px';
        } else {
            this.height = '100px';
        }

        if (!params.hasOwnProperty('width')) {
            this.width = params.width + 'px';
        } else {
            this.width = '200px';
        }
    }

    _createClass(Toast, [{
        key: 'setBackground',
        value: function setBackground(cssClass) {
            this.backgroundClass = cssClass;
        }
    }, {
        key: 'setDuration',
        value: function setDuration(duration) {
            this.duration = duration;
        }
    }, {
        key: 'toastIt',
        value: function toastIt() {
            // Crée en mémoire un nouvel élément dans le DOM
            var toaster = $('<div>');

            // On lui ajoute les classes
            toaster.addClass('toast').addClass(this.backgroundClass).css('width', this.width).css('height', this.height).html('<p>' + this.message + '</p>');

            // Ajoute le toaster au document lui-même
            toaster.appendTo($('body'));

            // Affiche pendant un certain temps
            setTimeout(function () {
                // Ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            }, this.duration * 1000);
        }
    }]);

    return Toast;
}();

/***/ }),

/***/ "./src/services/user-service.class.js":
/*!********************************************!*\
  !*** ./src/services/user-service.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name UserService
 * @desc Service de gestoion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

var UserService = exports.UserService = function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  /**
   * Lit localStorage pour récupérer un éventuel utilisateur
   */

  _createClass(UserService, [{
    key: 'hasUser',
    value: function hasUser() {

      //lire données dans localStorage = getItem et JSON.parse prendre une chaine de caractères et transformer en objet
      var user = JSON.parse(localStorage.getItem('storiesUser'));
      if (user) {
        return true;
      }
      return false;
    }
  }]);

  return UserService;
}();

/***/ }),

/***/ "./src/user/login.class.js":
/*!*********************************!*\
  !*** ./src/user/login.class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(/*! ./user.class */ "./src/user/user.class.js");

var _menu = __webpack_require__(/*! ./../../menu/menu.class */ "./menu/menu.class.js");

var _toaster = __webpack_require__(/*! ./../modules/toaster/toaster.class */ "./src/modules/toaster/toaster.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = exports.Login = function () {
    function Login() {
        _classCallCheck(this, Login);

        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        // Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    /**
     * formListener Gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     * **/

    _createClass(Login, [{
        key: 'formListener',
        value: function formListener() {
            var login = this.login;
            var password = this.password;

            var app = $('[app]');

            //$('#loginForm').on(
            app.on('keyup', '#loginForm', //Délégation d'évènement...
            // Callback : fonction appelée si l'événement défini survient
            function (event) {

                // Définition des attributs
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');

                // Est-ce que les deux champs sont remplis
                if (password.val() !== '' && login.val().length >= 5) {
                    // On peut activer le bouton...
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            });
        }
    }, {
        key: 'submitListener',
        value: function submitListener() {
            // let login = this.login;
            // let password = this.password;

            var app = $('[app]');

            //$('#loginForm').on(
            app.on('submit', '#loginForm', function (event) {

                // Définition des attributs
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');

                event.preventDefault(); // Empêche l'action par défaut...

                // Instancie un nouvel utilisateur
                var user = new _user.User();

                // Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                // Gère l'authentification...
                if (user.authenticate() === true) {
                    console.log('Bravo tu peux continuer!!');
                    // Instancie le menu...
                    $(document).attr('title', 'Bienvenue');
                    $('#main-title').html('Bienvenue');
                    var menu = new _menu.Menu();
                    menu.setUser(user);

                    //On va essayer d'aller vers une autre page
                    document.location.replace('#mystories');
                } else {
                    console.log('Dommage, échec!');
                    // Efface les champs et désactive le bouton
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    var toast = new _toaster.Toast({
                        message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                        duration: 10,
                        background: 'warning',
                        width: 200,
                        height: 100
                    });
                    toast.toastIt();
                }
            });
        }
    }]);

    return Login;
}();

/***/ }),

/***/ "./src/user/login/views/loginController.class.js":
/*!*******************************************************!*\
  !*** ./src/user/login/views/loginController.class.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name LoginController
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @desc Contrôleur pour la gestion du formulaire de Login
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aélion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _login = __webpack_require__(/*! ./../../login.class */ "./src/user/login.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginController = exports.LoginController = function () {
    function LoginController() {
        _classCallCheck(this, LoginController);

        //Définition de la vue (ce qui est affiché) pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
        console.log('Vue' + this.view);
        this.login = new _login.Login();
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    _createClass(LoginController, [{
        key: 'getView',
        value: function getView() {
            //Récupère le placeholder de mon application
            var app = $('[app]');

            //console.log('Tente de charger : ' + this.view);
            //Méthode de jquery (get) qui permet d'aller cherche un fichier quelque part et de la retourner dans une fonction (on récupère avec get et si succès, on le récupère dans la fonction)
            // Le contenu du fichier view sera récupéré dans le paramètre viewContent de la fonction
            $.get(this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);

                //console.log(viewContent);
            });
        }
    }]);

    return LoginController;
}();

/***/ }),

/***/ "./src/user/login/views/myStories.class.js":
/*!*************************************************!*\
  !*** ./src/user/login/views/myStories.class.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myStories = exports.myStories = function () {
    function myStories() {
        _classCallCheck(this, myStories);

        //Définition de la vue (ce qui est affiché) pour ce contrôleur
        this.view = './src/user/login/views/stories.view.html';
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    _createClass(myStories, [{
        key: 'getView',
        value: function getView() {
            //Récupère le placeholder de mon application
            var app = $('[app]');

            //console.log('Tente de charger : ' + this.view);
            //Méthode de jquery (get) qui permet d'aller cherche un fichier quelque part et de la retourner dans une fonction (on récupère avec get et si succès, on le récupère dans la fonction)
            // Le contenu du fichier view sera récupéré dans le paramètre viewContent de la fonction
            $.get(this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);

                //console.log(viewContent);
            });
        }
    }]);

    return myStories;
}();

/***/ }),

/***/ "./src/user/user.class.js":
/*!********************************!*\
  !*** ./src/user/user.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.1
 * * Ajout de la persistence de l'utilisateur
 */

var User = exports.User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    /**
     * Définit le username de l'utilisateur
     * @param {*} userName
     */

    _createClass(User, [{
        key: 'setUserName',
        value: function setUserName(userName) {
            this.userName = userName;
            // On prend ce qui a été saisi par l'utilisateur et on la range dans userName
        }

        /**
         * Définit le mot de passe de l'utilisateur
         * @param {*} password
         */

    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.password = password;
        }

        /**
         * Identifie l'utilisateur à partir d'un login et d'un mot de passe
         * @return boolean
         */

    }, {
        key: 'authenticate',
        value: function authenticate() {
            if (this.userName === 'cbasto' && this.password === 'cbasto') {
                this.group = 'Administrateur';

                //Ajout de l'utilisateur dans localStorage
                var persistentUser = {
                    userName: this.userName,
                    group: this.group
                };

                //localStorage : stockage du navigateur
                localStorage.setItem('storiesUser', JSON.stringify(persistentUser));

                return true;
            }
            return false;
        }
    }]);

    return User;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map