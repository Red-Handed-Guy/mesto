import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { makeSubmitForm }) {
    super(popupSelector)
    this._confirmButton = this._popup.querySelector('.popup__save-button')
    this._makeSubmitForm = makeSubmitForm
  }

  openPopup(card) {
    this._card = card
    super.openPopup()
  }

  _del() {
    this._makeSubmitForm(this._card)
  }

  setEventListeners() {
    this._confirmButton.addEventListener('click', this._del.bind(this))
    super.setEventListeners()
  }
}