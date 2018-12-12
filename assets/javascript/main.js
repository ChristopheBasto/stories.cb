/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */

import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/views/loginController.class';

let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';


// @versio 1.0.1 Passage par contrôleur
const controller = new LoginController();
controller.getView();

// Créer une instance de Login (ici login est un objet construit à partir de la classe Login)

 const login = new Login();

 
