export class Card {
  constructor(card, templateCard, openPopup, popupTypeImg, popupImg, popupCaption) {
    this._name = card.name
    this._link = card.link
    this.templateCard = templateCard
    this._openPopup = openPopup
    this._popupTypeImg = popupTypeImg
    this._popupImg = popupImg
    this._popupCaption = popupCaption
  }

  _getTemplate() {
    const cardElement = this.templateCard.querySelector('.element').cloneNode(true)
    return cardElement
  }

  _setCardEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._cardLike.classList.toggle('element__like-img_active')
    })

    this._cardImg.addEventListener('click', () => {
      this._popupImg.src = this._link
      this._popupImg.alt = this._name
      this._popupCaption.textContent = this._name
      this._openPopup(this._popupTypeImg)
    })

    this._cardDelButton.addEventListener('click', () => {
      this._cardBody.remove()
    })

  }

  generateCard() {
    this._cardBody = this._getTemplate()
    this._cardImg = this._cardBody.querySelector('.element__img')
    this._cardLike = this._cardBody.querySelector('.element__like-img')
    this._cardDelButton = this._cardBody.querySelector('.element__delete-button')

    this._cardBody.querySelector('.element__title').textContent = this._name
    this._cardImg.src = this._link
    this._cardImg.alt = this._name

    this._setCardEventListeners()

    return this._cardBody
  }
}




