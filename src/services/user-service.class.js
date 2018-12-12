/**
 * @name UserService
 * @desc Service de gestoion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

 export class UserService {
     constructor() {}

     /**
      * Lit localStorage pour récupérer un éventuel utilisateur
      */

     hasUser() {

        //lire données dans localStorage = getItem et JSON.parse prendre une chaine de caractères et transformer en objet
         const user = JSON.parse(localStorage.getItem('storiesUser'));
         if (user) {
             return true;
         }
         return false;
     }
 }