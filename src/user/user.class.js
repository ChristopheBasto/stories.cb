/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
 */

class User {
    constructor() { }

    /**
     * Définit le username de l'utilisateur
     * @param {*} userName
     */

    setUserName(userName) {
        this.userName = userName;
        // On prend ce qui a été saisi par l'utilisateur et on la range dans userName
    }

    /**
     * Définit le mot de passe de l'utilisateur
     * @param {*} password
     */

    setPassword(password) {
        this.password = password;
    }


    /**
     * Identifie l'utilisateur à partir d'un login et d'un mot de passe
     * @return boolean
     */
    authenticate() {
        if (this.userName === 'cbasto' && this.password === 'cbasto') {
            this.group = 'Administrateur';
            return true;
        }
        return false;
    }
}