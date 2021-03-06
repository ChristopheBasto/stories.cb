/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

class Toast {
    constructor(params) {
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
            const toaster = $('<div>')

            //On lui ajoute les classes 
            toaster
                .addClass('toast')
                .addClass(this.backgroundClass)
                .hmtl(this.message);

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