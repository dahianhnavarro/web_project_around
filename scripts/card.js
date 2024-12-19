//constructor de card
export class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector; 
        this._element = this._getTemplate();
        this._containerElement = this._element.querySelector(
        ".elements__container"
        );
        this._imageElement = this._element.querySelector(".element__photo-link");
        this._titleElement = this._element.querySelector(".element__photo-name");
        this._likeButton = this._element.querySelector(".element__heart-button");
        this._trashButton = this._element.querySelector(".element__photo-trash");
        //nueva funcion del constructor
        this._handleCardClick = handleCardClick; 
    }

    //funcion para llamar al template
    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._templateSelector)
        .content.querySelector(".element")
        .cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        //like button
        if (this._likeButton) {
            this._likeButton.addEventListener("click", () => this._toggleLike());
        } else {
            console.error ("Botón de me gusta no se encontró en la tarjeta.");
        }
    
        //trash button
        if(this._trashButton) {
            this._trashButton.addEventListener("click", () => this._deleteCard());
        } else {
            console.error("Botón de basura no se encontró en la tarjeta.");
        }
    
        //card size up
        if (this._imageElement) {
            //handleCardClick para card size up
            this._imageElement.addEventListener("click", () => {
                this._handleCardClick(this._name, this._link)
            });
        } else {
            console.error("La imagen no se encontró en la tarjeta.");
        }
    }

    //funcion para estado de like button
    _toggleLike() {
        this._likeButton.classList.toggle("element__heart-button_active");
    }

    //funcion para eliminar card
    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    //funcion para generar card
    generateCard() {
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._titleElement.textContent = this._name;
    
        this._setEventListeners();
    }
}