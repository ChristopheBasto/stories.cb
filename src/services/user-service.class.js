
/**
 * @name UserService
 * @desc Service de gestoion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

import { User } from "../user/user.class";

export class UserService {
    constructor() {
        this.user = {};
    }

    /**
     * Lit localStorage pour récupérer un éventuel utilisateur
     * @return boolean
     */
    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser'));
        if (user) {
            this.user = new User();
            this.user.setUserName(user.userName);
            this.user.group = user.group;

            return true;
        }
        return false;
    }

    removeUser() {
        localStorage.removeItem('storiesUser');
        this.user = {};
    }

    /**
     * Retourne un objet Utilisateur à partir du localStorage
     */
    getUser() {
        const localUser = JSON.parse(localStorage.getItem('storiesUser'));
        const user = new User();
        user.setUserName(localUser.userName);
        user.group = localUser.group;
        console.log('UserService::getUser');
        return user;
    }

    getAuthenticateUser() {
        this.hasUser();
        return this.user;
    }
}



/*
 export class UserService {
     constructor() {
         this.user = {};
     }

     /**
      * Lit localStorage pour récupérer un éventuel utilisateur
      * @return boolean
      *

     hasUser() {

        //lire données dans localStorage = getItem et JSON.parse prendre une chaine de caractères et transformer en objet
         const user = JSON.parse(localStorage.getItem('storiesUser'));
         if (user) {
            this.user = new User();
            this.user.setUserName(user.userName);
            this.user.group = user.group;


             return true;
         }
         return false;
     }
     removeUser() {
        localStorage.removeItem('storiesUser');
        this.user = {};
     }

     /**
     * Retourne un objet Utilisateur à partir du localStorage
     

     getUser() {
         
         const localUser = JSON.parse(localStorage.getItem('storiesUser'));
         const user = new User();
         user.setUserName(localUser.userName);
         user.group = localUser.group;
         console.log('UserService::getUser');
         return user;
         
     }
     getAuthenticateUser() {
         this.hasUser();
         return this.user;
     }
     
 }

 */