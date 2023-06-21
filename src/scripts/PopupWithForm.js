import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { makeSubmitForm }) {
    super(popupSelector)
    this._makeSubmitForm = makeSubmitForm
    this._popupForm = this._popup.querySelector('.popup__form')
    this._getInputValuesAuxiliary = this._getInputValues.bind(this)
    this._inputs = [...this._popupForm.querySelectorAll('.popup__input')]
  }

  _getInputValues() {
    this.inputList = {}
    this._inputs.forEach((input) => {
      const inputName = input.getAttribute('name')
      this.inputList[inputName] = input.value
    })
  }

  setInputValues(inputTextContent) {
    if (!(inputTextContent.length === this._inputs.length)) {
      return
    }
    for (let i = 0; i < this._inputs.length; i++) {
      this._inputs[i].value = inputTextContent[i]
    }
  }

  closePopup() {
    super.closePopup()
    this._popupForm.removeEventListener('submit', this._makeSubmitForm)
    this._popupForm.reset()
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', this._getInputValuesAuxiliary)
    this._popupForm.addEventListener('submit', this._makeSubmitForm)
    super.setEventListeners()
  }
}