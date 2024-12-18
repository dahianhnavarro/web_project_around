export default class Popup {
    constructor ( popupSelector ) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //método público para abrir popup
    open() {
        this._popup.classList.add("popup__show");
        document.addEventListener("keydown", this._handleEscClose);
    }

    //método público para cerrar popup
    close() {
        this._popup.classList.remove("popup__show");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    //método privado para cerrar popup con Esc
    _handleEscClose() {
        if ( evt.key === "Escape" ) {
            this.close();
        }
    }

     //detector de eventos de click 
    setEventListeners() {
         //cerrar al hacer clic en X 
        this._popup.querySelector(".popup__close-button")
            .addEventListener("click", () => {
            this.close();
        });

        //cerrar con overlay click
        this._popup.addEventListener("mousedown", (evt) => {
            if(evt.target.classList.contains(".popup__overlay")) { //revisar funcionalidad de esta clase en esta funcion
                this.close();
            }
        });
    }
}