class Login {
    //Cette classe login s'occupe d'un service : identifier l'utilisateur (chaque classe gère son service)
    constructor() {

        // contructor.log('Je suis le constructeur de Login');


        //Modifier le titre du document  (le nom de l'onglet)
        $(document).attr('title', 'Identifiez-vous');

        //Modifier le titre de la page (identique au let title du main pour nommer la page)

        $('#main-title').html('Identifiez-vous');

        //Définition du listener sur le formulaire   (this fait référence à l'objet login concerné)
        this.formListener();

    }

    /**
     * formListener: Gestionnaire d'évènement sur le formulaire de login
     * @param void
     * @return void
     */

    formListener() {

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

                if (login.val() !== '' && password.val() !== '') {
                    //On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Pas automatique
                    $('#btnLogin').attr('disabled', 'disabled');
                }

            }
        );

    }
}