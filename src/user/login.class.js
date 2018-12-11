import { User } from './user.class';
import { Menu } from './../../menu/menu.class';
import { Toast } from './../modules/toaster/toaster.class';
 




export class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        // Définition des attributs
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

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
        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'keyup',
            // Callback : fonction appelée si l'événement défini survient
            function(event) {

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
        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'submit',
            function(event) {
                event.preventDefault(); // Empêche l'action par défaut...
                
                // Instancie un nouvel utilisateur
                const user = new User();

                // Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                // Gère l'authentification...
                if (user.authenticate() === true) {
                    console.log('Oki, tu peux y aller');
                    // Instancie le menu...
                    $(document).attr('title', 'Bienvenue');
                    $('#main-title').html('Bienvenue');
                    const menu = new Menu();
                    menu.setUser(user);
                } else {
                    console.log('ko, t\'as pas le droit !');
                    // Efface les champs et désactive le bouton
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    const toast = new Toast(
                        {
                            message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            duration: 2,
                            background: 'warning',
                            width: 200,
                            height: 100
                        }
                    );
                    toast.toastIt();
                }
            }
        );
    }
}

/** 

export class Login {
    //Cette classe login s'occupe d'un service : identifier l'utilisateur (chaque classe gère son service)
    constructor() {

        // contructor.log('Je suis le constructeur de Login');


        //Modifier le titre du document  (le nom de l'onglet)
        $(document).attr('title', 'Identifiez-vous');

        //Modifier le titre de la page (identique au let title du main pour nommer la page)

        $('#main-title').html('Identifiez-vous');


        //Définition des attributs
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

        //Définition du listener sur le formulaire   (this fait référence à l'objet login concerné)
        this.formListener();
        this.submitListener();

    }

    //
     * formListener: Gestionnaire d'évènement sur le formulaire de login
     * @param void
     * @return void
     //

    formListener() {


        let login = this.login;
        let password = this.password;

        // Méthode on place un gestionnaire d'évènement sur cet évènement là (ici on intercepte tous les changements dans le formulaire)
        $('#loginForm').on(
            'keyup',
            //Callback: fonction appelée si l'évènement defini survient
            function (event) {
                // console.log('Le formulaire a subi une modification');

                //Vérifier le contenu des deux champs

                //selecteur entre crochet va chercher tous les éléments dans les documents où name=LoginField
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');


                //val renvoie ce qui a été saisi par l'utilisateur

                //console.log('Login : ' + login.val());
                //console.log('Password : ' + password.val());

                //Est-ce que les deux champs sont remplis?


                if (
                    login.val() !== '' &&
                    password.val() !== '' &&
                    login.val().length >= 5 &&
                    password.val().length >= 5
                ) {
                    //On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Pas automatique
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }

        );

    }

    submitListener() {
        let login = this.login;
        let password = this.password;
        $('#loginForm').on(
            'submit',
            function (event) {
                event.preventDefault(); //Empêche l'action par défaut de soumettre le formulaire

                // Méthode 1 : const login = ($('[name="loginField"]').val();
                // Méthode 1 : const password = $('[name="passwordField"]').val();
                //console.log('Le formulaire est validé !');
                const user = new User();
                //Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                // Méthode 2 : plus rapide
                //user.setUserName($('[name="loginField"]').val());

                //user.setPassword($('[name="passwordField"]').val());


                //Gère l'authentification...
                if (user.authenticate()) {

                    console.log('Bravo tu peux continuer !');


                    $(document).attr('title', 'Bienvenue');
                    $('#main-title').html('Bienvenue');

                    const menu = new Menu ();
                    menu.setUser(user);
            

            



                } else {
                    console.log('Dommmage, droits refusés');
                    login.val('');
                    password.val('');
                    $('#btnLogin').attr('disabled', 'disabled');

                    //On peut instancer un toast
                    const toast = new Toast(

                        // Entre accolade : objet json avec attribut message et attribut duration avec leurs valeurs associées
                        //Attributs entre ' ' car c'est une déclaration, ils ne renvoient à aucun paramètre antérieurs, ils sont "nouveaux"
                        {
                            'message': 'Ce login ou ce mot de passe ne corrrespond à aucun utilisateur',
                            'duration': 10
                        }
                    );
                    toast.toastIt();
                }

            }
        );
    }
}


*/