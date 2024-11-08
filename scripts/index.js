//VARIABLES
//variables editar perfil
const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".container__close-button");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const profileForm = document.querySelector("#profile-form");

//variables agregar cards
const popupCards = document.querySelector("#popup-cards")
const cardContainer = document.querySelector(".elements__container");
const addButton = document.querySelector("#profile-add-button");
const cardCloseButton = document.querySelector("#close-cards-popup");
const formAddCard = document.querySelector("#cards-form")
const inputCardTitle = document.querySelector("#input-title");
const inputCardLink = document.querySelector("#input-link");
const createButton = document.querySelector(".container__button-create");

//variables sizeup cards
const popupCardSizeup = document.querySelector("#popup-size-card");
const popupCardSizeupClose = document.querySelector(".popup__close-card");

//cards iniciales
const initialCards = [
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

//FUNCIONES GENERALES
//abrir cualquier popup
function openPopup(popup) {
    popup.classList.add("popup__show");
};

//cerrar cualquier popup
function closePopup(popup) {
  popup.classList.remove("popup__show");
};

//PERFIL
//abrir editar perfil popup
profileButton.addEventListener("click", function () {
  inputName.textContent = profileName.value;
  inputAbout.textContent = profileAbout.value;
  openPopup(popupProfile);
});

//cerrar editar perfil popup
closeButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

//submit editar perfil
profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault(); 
  profileName.textContent = inputName.value; 
  profileAbout.textContent = inputAbout.value; 
  closePopup(popupProfile);
}); 

//TARJETAS
//funcion abrir agregar cards form
addButton.addEventListener("click", function () {
  openPopup(popupCards);
});

//funcion cerrar agregar cards form
cardCloseButton.addEventListener("click", function () {
  closePopup(popupCards);
});

//funcion agregar cards
function addCards(link, name) {
  const cardTemplate = document.querySelector("#template-card").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__photo-link");
  const cardTitle = cardElement.querySelector(".element__photo-name");
  const deleteButton = cardElement.querySelector(".element__photo-trash");
  const likeButton = cardElement.querySelector(".element__heart-button");

    //evento like button
    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("element__heart-button_active");
    });

    //evento trash button
    deleteButton.addEventListener("click", function() {
      cardElement.remove();
    });
    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    //evento size-up card
    cardImage.addEventListener("click", function() {
      openPopup(popupCardSizeup);
      popupCardSizeup.querySelector(".popup__photo-link").src = link;
      popupCardSizeup.querySelector(".popup__photo-link").alt = name;
      popupCardSizeup.querySelector(".popup__photo-name").textContent = name;
    });

    return cardElement;
};

//cerrar size-up card
popupCardSizeupClose.addEventListener("click", function() {
  closePopup(popupCardSizeup);
})

//funcion cards iniciales
initialCards.forEach(function(element) {
  const newCard = addCards(element.link, element.name);
  cardContainer.prepend(newCard);
});

//submit card agregada 
formAddCard.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const name = inputCardTitle.value;
    const link = inputCardLink.value;

    if (name && link) {
      const newCard = addCards(link, name);
      cardContainer.prepend(newCard);

      inputCardTitle.value = "";
      inputCardLink.value = "";

      closePopup(popupCards);
    }
  });