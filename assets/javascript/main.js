/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */

import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/views/loginController.class';
import { myStories } from '../../src/user/login/views/myStories.class';
import { UserService } from '../../src/services/user-service.class';

$(window).on(
    'hashchange',
    function (event) {
        const url = document.location.hash;
        console.log('Nouvelle URL : ' + document.location.hash);
        if (url === '#/mystrories') {
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();
                const login = new Login();

            } else {

                const tableau = new myStories();
                tableau.getView();
            }
        } else {

            const controller = new LoginController();
            controller.getView();
            const login = new Login();


        }
    }
);

$(window).on(
    'load',
    function (event) {
        const url = document.location.hash;
        console.log('Nouvelle URL : ' + document.location.hash);
        if (url === '#/mystrories') {
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();
                const login = new Login();

            } else {

                const tableau = new myStories();
                tableau.getView();
            }
        } else {

            const controller = new LoginController();
            controller.getView();
            const login = new Login();


        }
    }

);

