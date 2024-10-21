const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".container__close-button");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const profileForm = document.querySelector("#profile-form");

function openPopup(popup) {
    popup.classList.add("popup__show");
    inputName.textContent = profileName.value;
    inputAbout.textContent = profileAbout.value;
};
function closePopup(popup) {
    popup.classList.remove("popup__show");
};

profileButton.addEventListener("click", function () {
    openPopup(popupProfile);
});
closeButton.addEventListener("click", function () {
    closePopup(popupProfile);
});

profileForm.addEventListener("submit", function (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileAbout.textContent = inputAbout.value; 
    closePopup(popupProfile);
}); 