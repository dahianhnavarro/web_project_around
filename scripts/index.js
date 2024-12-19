//IMPORTACIONES
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";
import { closePopupWithOverlayClick } from "./utils.js";

//variables editar perfil 
const profileButton = document.querySelector(".profile__edit-button");
//const closeButton = document.querySelector(".popup__close-button");
const popupProfile = document.querySelector("#popup-profile");
//const profileName = document.querySelector(".profile__info-name");
//const profileAbout = document.querySelector(".profile__info-description");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");

const addButton = document.querySelector(".profile__add-button");

//variables cards
//const cardCloseButton = document.querySelector("#close-cards-popup");
const popupCards = document.querySelector("#popup-cards")

//variables forms
const formAddCard = document.querySelector("#cards-form")
const profileForm = document.querySelector("#profile-form");

//const inputCardTitle = document.querySelector("#input-title");
//const inputCardLink = document.querySelector("#input-link");

const elementsContainer = document.querySelector(".elements__container");

//variables validation
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".form__error_show",
};

//cards iniciales
const initialCardsData = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

//instancias FormValidator 
const profileFormValidator = new FormValidator(
  validationConfig, profileForm);
const addCardsFormValidator = new FormValidator(
  validationConfig, formAddCard);
profileFormValidator.enableValidation();
addCardsFormValidator.enableValidation();

//function handleCardClick abre image size up 
function handleCardClick(name, link) {
  popupWithImage.open({ link,name });
}

//PopupWithImage para visualizar card size up
const popupWithImage = new PopupWithImage("#popup-size-card");

//Section para cards
const cardSection = new Section(
  {
    items: initialCardsData,
    renderer: (cardData) => {
      const card = new Card(cardData, "#template-card", handleCardClick);
      const cardElement = card.generateCard();
      cardSection.addItems(cardElement);
    },
  },
  ".elements__container"
);
cardSection.renderItems();

//instancia de UserInfo clase
const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  aboutSelector: "#profile-description",
});

//instancia PopupWithForm para profile
const popupProfileForm = new PopupWithForm("#popup-profile",
  (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      about: formData["about-me"],
    });
    popupProfileForm.close();
  });
  
//abrir editar perfil popup con datos existentes
profileButton.addEventListener("click", () => {
  console.log("Profile edit button click");
  popupProfileForm.open();

  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputAbout.value = userData["about-me"]; //mensaje de error en consola pero es funcional en el sitio
  
  //reestablecer submit button 
  profileFormValidator._toggleStateOfButton();
});

 //abrir popup agregar card
addButton.addEventListener("click", () => {
  addCardsFormValidator._toggleStateOfButton();
  popupAddCardForm.open();
});

//PopupWithForm para add card form
const popupAddCardForm = new PopupWithForm("#popup-cards", (formData) => {
  const cardData = { 
    name: formData.title, link: formData["image-url"]
  };

  const card = new Card(cardData, "#template-card",
    handleCardClick
  );

  const cardElement = card.generateCard();
  cardSection.addItems(cardElement);
  popupAddCardForm.close();
})

//cerrar popup con overlay
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", closePopupWithOverlayClick);
});

popupWithImage.setEventListeners();
popupProfileForm.setEventListeners();
popupAddCardForm.setEventListeners()