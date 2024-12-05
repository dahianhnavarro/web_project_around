//FUNCIONES GENERALES
//abrir cualquier popup
export function openPopup(popup) {
    popup.classList.add("popup__show");
};

//cerrar cualquier popup
export function closePopup(popup) {
  popup.classList.remove("popup__show");
};

//cerrar popup con esc key
export function closePopupWithEscape(event) {
    if(event.key === "Escape") {
      const openPopup = document.querySelector(".popup__show");
      if (openPopup) {
        closePopup(openPopup);
      }
    }
  }