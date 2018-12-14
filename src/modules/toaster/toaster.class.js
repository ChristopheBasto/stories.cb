/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

/*
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
            this.duration = 7;
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
            .css('width', this.width)
            .css('height', this.height)
            .html('<p>' + this.message + '</p>');

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
*/






export class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) {
            // Paramètre de définition de la couleur de fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast (en secondes)
            this.duration = 3;
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

    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toastIt() {
        // Crée en mémoire un nouvel élément dans le DOM
        const toaster = $('<div>');

        // On lui ajoute les classes
        toaster
            .addClass('toast')
            .addClass(this.backgroundClass)
            .addClass('animated')
            .addClass('fadeInDownBig')
            .css('width', this.width)
            .css('height', this.height)
            .html('<p>' + this.message + '</p>');
        
        // Ajoute le toaster au document lui-même
        toaster.appendTo($('body'));

        // Affiche pendant un certain temps
        setTimeout(
            function() {
                toaster
                    .removeClass('fadeInRightBig')
                    .addClass('fadeOutRightBig');
                // On va attendre, avant de le supprimer
                setTimeout(function() { 
                    // Ici, quand on arrive au bout de l'intervalle de temps
                    toaster.remove();
                }, 1500);
            },
            this.duration * 1000
        );
    }
}


