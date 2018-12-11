/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

class Toast {
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
                .html(this.message);

            //Ajoute le toaster au document lui-même

            toaster.appendTo($('body'));

            //Affichage pendant un certain temps
            setTimeout(
                function () {
                    //Ici, quand on arrive au bout de l'intervalle de temps
                    toaster.remove();
                },
                this.duration * 1000
            );

        }
    }