const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".container__close-button");

function openPopup(popup) {
    popup.classList.add("popup__show");
  };

  profileButton.addEventListener("click", function () {
    openPopup(popupProfile);
  });