//ERRORES EN INPUT
//show error de input
export const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__error_show");
};

//hide error de input
export const hideInputError = (formElement, inputElement) => {
    const errorElement= formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_error");
    errorElement.classList.remove("form__error_show");
    errorElement.textContent = "";
};

//CHECK VALIDEZ
//check input para validez
export const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } 
    else {
        hideInputError(form, inputElement);
    }
};

//check si input tiene invalidez
export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

//VALIDEZ Y BOTONES
//toggle de boton segun validez de input
export const toggleStateOfButton = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("form__button_disabled");
    }
    else {
        buttonElement.classList.remove("form__button_disabled");
    }
};

//EVENTOS DE VALIDACION
//evento para cada input
export const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".container__item"));
    const buttonElement = formElement.querySelector(".container__button-save");

    //check estado boton al inicio
    toggleStateOfButton(inputList, buttonElement);

    //estado de boton save
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement);
            toggleStateOfButton(inputList, buttonElement); 
        });
    });
};

//VALIDACION PARA TODOS LOS FORMS
export const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener("sbumit", function (evt) {
            evt.preventDefault();
        });

        const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
        const buttonElement = formElement.querySelector(config.submitButtonSelector);

        setEventListeners(formElement, inputList, buttonElement, config);
    });
};
  
enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });
  