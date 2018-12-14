

import { Menu } from '../../../menu/menu.class';
import {UserService} from '../../../services/user-service.class'



export class MyStories {
constructor() {
    //Définition de la vue (ce qui est affiché) pour ce contrôleur
    this.view = './src/user/login/views/stories.view.html';
    
    const userService = new UserService();
    const menu = new Menu ();
    menu.setUser(userService.getUser());
 
}

/**
 * Méthode pour récupérer la vue à afficher
 */
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