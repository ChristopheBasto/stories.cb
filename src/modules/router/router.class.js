/**
 * @name Router
 * @desc Collection des routes de l'application
 * @author Aélion
 * @version 1.0.0
 * 
 */

 import { Route } from './route.class';
 import { LoginController } from './../../user/login/loginController.class';
 import { MyStories } from '../../stories.views.class';
 import { UserService } from './../../services/user-service.class';


 export class Router {
     constructor() {
         this.routes = new Map();

         let router = this;

         //Définit le listener sur les routes
         $(window).on(
             'hashchange',
             function (event) {
                 router.getRoute()
             }
         );
         $(window).on(
            'load',
            function (event) {
                router.getRoute()
            }
        );
     }



     add(route) {
         this.routes.set(route.path, route);
         return this;
     }

     getRoute() {
         const url = location.hash.slice(1) || '/';
         console.log('Routes définies : ' + this.routes.size + ' [' + url + ']');
         // On va essayer de chercher si dans les routes, on a quelque chose qui correspond

         const route = this.routes.get(url);
         



         return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');

     }
 }