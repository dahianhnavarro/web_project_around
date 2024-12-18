export default class UserInfo {
    constructor ({ nameSelector, aboutSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
    }

    //método público que devuelve un objeto con información sobre el usuario
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent,
        };
    }

    //método público que toma los datos del nuevo usuario y los agrega en la página
    setUserInfo({ name, about }) {
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about;
    }
}