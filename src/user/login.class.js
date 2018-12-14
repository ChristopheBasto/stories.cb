import { User } from './user.class';
import { Menu } from './../../src/menu/menu.class';
import { Toast } from './../modules/toaster/toaster.class';



export class Login {
    constructor() {
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
     */
    formListener() {

        //Nouveau *********************************************************************************
        let login = this.login;
        let password = this.password;

        const app = $('[app]');

        app.on(
            'keyup',
            '#loginForm', // Délégation d'événement...
            // Callback : fonction appelée si l'événement défini survient
            function(event) {
                // Définition des attributs
                let login = $('[name="loginField"]');
                let password = $('[name="passwordField"]');
                
                // Est-ce que les deux champs sont remplis
                if ( 
                    password.val() !== '' &&
                    login.val().length >= 5 ) {
                    // On peut activer le bouton...
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        );
    }

    submitListener() {
        const app = $('[app]');
        app.on(
            'submit',
            '#loginForm',
            function(event) {
                // Définition des attributs
                let login = $('[name="loginField"]');
                let password = $('[name="passwordField"]');

                event.preventDefault(); // Empêche l'action par défaut...
                
                // Instancie un nouvel utilisateur
                const user = new User();

                // Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                user.authenticate().then((aUser) => {
                    // Gère l'authentification...
                    if (aUser) {
                        console.log('Bravo, tu peux continuer !');
                        // Instancie le menu...

                        $(document).attr('title', 'Bienvenue');
                        $('#main-title').html('Bienvenue');
                        const menu = new Menu();
                        menu.setUser(user);

                        // On va essayer d'aller vers une autre page
                        document.location.replace('#/mystories');
                    } else {
                        console.log('Dommage, échec !');
                        // Efface les champs et désactive le bouton
                        login.val('');
                        password.val('');

                        $('#btnLogin').attr('disabled', 'disabled');

                        // On peut instancier un toast
                        const toast = new Toast(
                            {
                                message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                                duration: 4,
                                background: 'danger',
                                width: 200,
                                height: 100
                            }
                        );
                        toast.toastIt();
                    }
                });
            }
        );
    }
}


/*
export class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');



        // Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    
     //* formListener Gestionnaire d'événement sur le formulaire de login
     //* @param void
     //* @return void
     //* 


    formListener() {
        let login = this.login;
        let password = this.password;

        const app = $('[app]');


        //$('#loginForm').on(
        app.on(
            'keyup',
            '#loginForm', //Délégation d'évènement...
            // Callback : fonction appelée si l'événement défini survient
            function (event) {

                // Définition des attributs
                let login = $('[name="loginField"]');
                let password = $('[name="passwordField"]');

                // Est-ce que les deux champs sont remplis
                if (
                    password.val() !== '' &&
                    login.val().length >= 5) {
                    // On peut activer le bouton...
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        );
    }

    submitListener() {
        // let login = this.login;
        // let password = this.password;

        const app = $('[app]');


        //$('#loginForm').on(
        app.on(
            'submit',
            '#loginForm',


            function (event) {

                // Définition des attributs
                let login = $('[name="loginField"]');
                let password = $('[name="passwordField"]');


                event.preventDefault(); // Empêche l'action par défaut...

                // Instancie un nouvel utilisateur
                const user = new User();

                // Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                user.authenticate().then((aUser) => {


                    // Gère l'authentification...
                if (aUser) {
                    console.log('Bravo tu peux continuer!!');
                    // Instancie le menu...
                    $(document).attr('title', 'Bienvenue');
                    $('#main-title').html('Bienvenue');
                    const menu = new Menu();
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
                    const toast = new Toast(
                        {
                            message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            duration: 10,
                            background: 'warning',
                            width: 200,
                            height: 100
                        }
                    );
                    toast.toastIt();
                }

                });

                
            }
        );
    }
}

*/