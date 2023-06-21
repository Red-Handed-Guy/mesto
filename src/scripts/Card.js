export class Card {
  constructor(
    card,
    templateCard,
    popupTypeImg,
    popupImg,
    popupCaption,
    { handleCardClick }
  ) {
    this._name = card.name
    this._link = card.link
    this._templateCard = templateCard
    this._popupTypeImg = popupTypeImg
    this._popupImg = popupImg
    this._popupCaption = popupCaption
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    const cardElement = this._templateCard
      .querySelector('.element')
      .cloneNode(true)
    return cardElement
  }
  _toggleLike() {
    this._cardLike.classList.toggle('element__like-img_active')
  }

  _deleteCard() {
    this._cardBody.remove()
  }

  _setCardEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._toggleLike()
    })
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name)
    })
    this._cardDelButton.addEventListener('click', () => {
      this._deleteCard()
    })
  }

  generateCard() {
    this._cardBody = this._getTemplate()
    this._cardImg = this._cardBody.querySelector('.element__img')
    this._cardLike = this._cardBody.querySelector('.element__like-img')
    this._cardDelButton = this._cardBody.querySelector(
      '.element__delete-button'
    )

    this._cardBody.querySelector('.element__title').textContent = this._name
    this._cardImg.src = this._link
    this._cardImg.alt = this._name

    this._setCardEventListeners()

    return this._cardBody
  }
}