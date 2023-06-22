import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { makeSubmitForm }) {
    super(popupSelector)
    this._makeSubmitForm = makeSubmitForm
    this._popupForm = this._popup.querySelector('.popup__form')
    this._getInputValuesAuxiliary = this._getInputValues.bind(this)
    this._inputs = this._popupForm.querySelectorAll('.popup__input')
    this._title = this._popupForm.querySelector('.popup__input_type_name')
    this._subtitle = this._popupForm.querySelector('.popup__input_type_subtitle')
    this._inputs = [this._title, this._subtitle]
  }

  _getInputValues(event) {
    event.preventDefault()
    const inputList = {}
    this._inputs.forEach((input) => {
      const inputName = input.getAttribute('name')
      inputList[inputName] = input.value
    })
    this._makeSubmitForm(inputList)
  }


  getTextContent({title, subtitle}){
    this._title.value = title
    this._subtitle.value = subtitle
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