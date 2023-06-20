import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImg = this._popup.querySelector('.popup__img')
    this._figCaption = this._popup.querySelector('.popup__img-caption')
  }

  openPopup(imgPath, text) {
    this._popupImg.src = imgPath
    this._popupImg.alt = text
    this._figCaption.textContent = text
    super.openPopup()
  }  
}