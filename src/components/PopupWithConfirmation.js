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

  _delete() {
    this._makeSubmitForm(this._card)
  }

  setEventListeners() {
    this._confirmButton.addEventListener('click', this._delete.bind(this))
    super.setEventListeners()
  }
}