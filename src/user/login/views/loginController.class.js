/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de Login
 * @author Aélion
 * @version 1.0.0
 */


 import { Login } from './../../login.class';


 
 export class LoginController {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';

        // Instancier la classe Login pour la gestion du formulaire
        this.login = new Login();
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */
    getView() {
        // Récupère le placeholder de mon application
        const app = $('[app]');

        $.get(
            this.view,
            // Callback appelée après que le fichier ait été chargé
            function(viewContent) {
                app.empty(); // Vide le contenu le cas échéant
                app.html(viewContent);
            }
        );
    }
}


 /*
export class LoginController {
    constructor() {
        //Définition de la vue (ce qui est affiché) pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
        //console.log('Vue' + this.view);
        this.login = new Login ();
    }

    /**
     * Méthode pour récupérer la vue à afficher
     
    getView() {
        //Récupère le placeholder de mon application
        const app = $('[app]');

        //console.log('Tente de charger : ' + this.view);
        //Méthode de jquery (get) qui permet d'aller cherche un fichier quelque part et de la retourner dans une fonction (on récupère avec get et si succès, on le récupère dans la fonction)
        // Le contenu du fichier view sera récupéré dans le paramètre viewContent de la fonction
        $.get(
            this.view,
            function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);

                //console.log(viewContent);
            }
        );
    }

}
*/