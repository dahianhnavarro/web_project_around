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

//check input para validez
export const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } 
    else {
        hideInputError(form, inputElement);
    }
};

