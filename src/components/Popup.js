export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(popupSelector)
    this._closeButton = this._popup.querySelector('.popup__close-button')
    this._openPopupSelector = '.popup_opened'
    this.closeByClickAuxiliary = this._closeByClick.bind(this)
    this.handleEscCloseAuxiliary = this._handleEscClose.bind(this)
    this.closePopupAuxiliary = this.closePopup.bind(this)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault()
      this.closePopup()
    }
  }
  _closeByClick(evt) {
    if ([...evt.target.classList].includes(this._popupSelector.slice(1))) {
      this.closePopup()
    }
  }
  openPopup() {
    this._popup.classList.add(this._openPopupSelector.slice(1))
    document.addEventListener('keydown', this.handleEscCloseAuxiliary)
  }

  closePopup() {
    this._popup.classList.remove(this._openPopupSelector.slice(1))
    document.removeEventListener('keydown', this.handleEscCloseAuxiliary)
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this.closeByClickAuxiliary)
    this._closeButton.addEventListener('click', this.closePopupAuxiliary)
  }
}