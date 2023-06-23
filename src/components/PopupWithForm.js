import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { makeSubmitForm }) {
    super(popupSelector)
    this._makeSubmitForm = makeSubmitForm
    this._popupForm = this._popup.querySelector('.popup__form')
    this._getInputValuesAuxiliary = this._getInputValues.bind(this)
    this._inputs = this._popupForm.querySelectorAll('.popup__input')
  }

  _getInputValues(event) {
    event.preventDefault()
    const inputList = {}
    ;[...this._inputs].forEach((input) => {
      const inputName = input.getAttribute('name')
      inputList[inputName] = input.value
    })
    this._makeSubmitForm(inputList)
  }

  setInputValues(items) {
    ;[...this._inputs].forEach((input) => {
      input.value = items[input.name]
    })
  }

  closePopup() {
    this._popupForm.reset()
    super.closePopup()
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', this._getInputValuesAuxiliary)
    super.setEventListeners()
  }
}
