const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
}

//скрытие ошибки валидации
function hideError(inputItem, errorElement, config) {
  errorElement.classList.remove(config.errorClass)
  inputItem.classList.remove(config.inputErrorClass)
  errorElement.textContent = inputItem.validationMessage
}

//отображение ошибки валидации
function showError(inputItem, errorElement, config) {
  errorElement.classList.add(config.errorClass)
  inputItem.classList.add(config.inputErrorClass)
  errorElement.textContent = inputItem.validationMessage
}

//проверка валидации кнопки submit
function toggleButtonState(buttonElement, isActive, config) {
  if (isActive) {
    buttonElement.disabled = false
    buttonElement.classList.remove(config.inactiveButtonClass)
  } else {
    buttonElement.disabled = 'disabled'
    buttonElement.classList.add(config.inactiveButtonClass)
  }
}

//валидация полей input
function checkInputVailidity(inputItem, formItem, config) {
  const inputValidity = inputItem.checkValidity()
  const errorElement = formItem.querySelector(`#${inputItem.name}-error`)
  if (inputValidity) {
    hideError(inputItem, errorElement, config)
  } else {
    showError(inputItem, errorElement, config)
  }
}

//валидация формы
function setEventListener(formItem, config) {
  const imputsList = formItem.querySelectorAll(config.inputSelector)
  const formSaveButton = formItem.querySelector(config.submitButtonSelector)
  toggleButtonState(formSaveButton, formItem.checkValidity(), config)
  ;[...imputsList].forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      //проверка валидации кнопки submit после каждого события 'input'
      toggleButtonState(formSaveButton, formItem.checkValidity(), config)
      //валидация полей input после каждого события 'input'
      checkInputVailidity(inputItem, formItem, config)
    })
  })
  //проверка валидации формы после события submit для того, чтобы окно заново открывалось чистое и с заблокированной кнопкой (актуально для формы с добавлением карточек)
  formItem.addEventListener('submit', () => {
    toggleButtonState(formSaveButton, formItem.checkValidity(), config)
  })
}

//повесили валидацию на каждую форму
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector)
  ;[...forms].forEach((formItem) => {
    setEventListener(formItem, config)
  })
}

enableValidation(configValidation)