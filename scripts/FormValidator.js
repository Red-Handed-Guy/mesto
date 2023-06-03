export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
}

export class FormValidator {
  constructor(config, formItem) {
    this._config = config
    this._formItem = formItem
    this._imputsList = this._formItem.querySelectorAll(
      this._config.inputSelector
    )
    this._formSaveButton = this._formItem.querySelector(
      this._config.submitButtonSelector
    )
  }

  //скрытие ошибки валидации
  _hideError(inputItem, errorElement) {
    errorElement.classList.remove(this._config.errorClass)
    inputItem.classList.remove(this._config.inputErrorClass)
    errorElement.textContent = inputItem.validationMessage
  }

  //отображение ошибки валидации
  _showError(inputItem, errorElement) {
    errorElement.classList.add(this._config.errorClass)
    inputItem.classList.add(this._config.inputErrorClass)
    errorElement.textContent = inputItem.validationMessage
  }

  //проверка валидации кнопки submit
  toggleButtonState() {
    if (this._formItem.checkValidity()) {
      this._formSaveButton.disabled = false
      this._formSaveButton.classList.remove(this._config.inactiveButtonClass)
    } else {
      this._formSaveButton.disabled = 'disabled'
      this._formSaveButton.classList.add(this._config.inactiveButtonClass)
    }
  }

  //валидация полей input
  checkInputVailidity(inputItem) {
    const inputValidity = inputItem.checkValidity()
    const errorElement = this._formItem.querySelector(
      `#${inputItem.name}-error`
    )
    if (inputValidity) {
      this._hideError(inputItem, errorElement)
    } else {
      this._showError(inputItem, errorElement)
    }
  }

  //валидация формы
  enableValidation() {
    this.toggleButtonState()
    ;[...this._imputsList].forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        //проверка валидации кнопки submit после каждого события 'input'
        this.toggleButtonState()
        //валидация полей input после каждого события 'input'
        this.checkInputVailidity(inputItem)
      })
    })
    //проверка валидации формы после события submit для того, чтобы окно заново открывалось чистое и с заблокированной кнопкой (актуально для формы с добавлением карточек)
    this._formItem.addEventListener('submit', () => {
      this.toggleButtonState()
    })
  }
}

//повесили валидацию на каждую форму
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector)
  ;[...forms].forEach((formItem) => {
    const formValidation = new FormValidator(config, formItem)
    formValidation.enableValidation()
  })
}

enableValidation(configValidation)
