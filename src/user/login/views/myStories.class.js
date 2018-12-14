

import { Menu } from '../../../menu/menu.class';
import {UserService} from '../../../services/user-service.class';


/*
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

export class MyStories {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/stories/views/stories.view.html';

        const userService = new UserService();
        const menu = new Menu();
        menu.setUser(userService.getUser());

        this.stories = [];

        // Affichage du loader
        const loader = $('[app]').children('#loader').eq(0);
        loader.removeClass('hidden');

        const service = new StoriesService();

        service.getMyStories().then((stories) => {
            for (let story of stories) {
                const aStory = new Story();
                aStory.deserialize(story);
                this.stories.push(aStory);
            }
            // En fin de parcours, on crée les lignes du tableau
            this._createTable();

            // Efface le loader
            loader.addClass('hidden');
        });
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

    _createTable() {
        const tbody = $('[app]').children('#stories-table').eq(0).children('tbody').eq(0);

        for (let story of this.stories) {
            // Créer une ligne
            let _row = $('<tr>');
            _row.attr('data-id', story.id);

            // Colonne 1 : id
            let _td = $('<td>');
            _td.html(story.id);
            _td.appendTo(_row);

            // Colonne 2 : Titre
            _td = $('<td>');
            _td.html(story.title);
            _td.appendTo(_row);

            // Colonne 3 : Date de début
            _td = $('<td>');
            _td.html(story.getBeginDate());
            _td.appendTo(_row);

            // Colonne 4 : Date de fin estimée
            _td = $('<td>');
            _td.html(story.getEstimatedEndDate());
            _td.appendTo(_row);

            _td = $('<td>');
            _td.html(story.libelle);
            _td.appendTo(_row);

            // Dernière colonne à traiter
            _td = $('<td>');
            let _btn = $('<i>');
            _btn
                .addClass('icon-switch')
                .addClass('done');
            _btn.appendTo(_td);
            _btn = $('<i>');
            _btn
                .addClass('icon-bin2')
                .addClass('delete');
            _btn.appendTo(_td);
            _td.appendTo(_row);

            // Ajoute le tout au tbody
            _row.appendTo(tbody);
        }
    }
}
