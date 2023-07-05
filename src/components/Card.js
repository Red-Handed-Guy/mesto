export class Card {
  constructor(card, templateCard, callBacks, myId) {
    //параметры карточки
    this._myId = myId

    this._name = card.name
    this._link = card.link
    this._cardOwnerId = card.owner._id
    this.cardId = card._id
    this._cardLikesArr = card.likes
    this._cardIsLiked = false

    //функции
    this._handleCardClick = callBacks.handleCardClick
    this._handleDeleteButton = callBacks.handleDeleteButton
    this._handleToggleLike = callBacks.handleToggleLike

    //дом элементы
    this._templateCard = templateCard
    this._cardBody = this._getTemplate()
    this._cardImg = this._cardBody.querySelector('.element__img')
    this._cardLike = this._cardBody.querySelector('.element__like-img')
    this._cardDelButton = this._cardBody.querySelector(
      '.element__delete-button'
    )
    this._cardLikeCount = this._cardBody.querySelector('.element__like-counter')
  }

  _getTemplate() {
    const cardElement = this._templateCard
      .querySelector('.element')
      .cloneNode(true)
    return cardElement
  }

  _toggleLike() {
    if (this._cardIsLiked) {
      this._handleToggleLike(this.cardId, 'DELETE')
    } else {
      this._handleToggleLike(this.cardId, 'PUT')
    }
  }

  toggleLikeColor() {
    if (this._cardIsLiked) {
      this._cardLike.classList.remove('element__like-img_active')
      this._cardIsLiked = false
    } else {
      this._cardLike.classList.add('element__like-img_active')
      this._cardIsLiked = true
    }
  }

  deleteCard() {
    this._cardBody.remove()
  }

  _checkMyLike() {
    this._cardLikesArr.forEach(like => {
      if (like._id === this._myId) {
        this._cardIsLiked = true
      }
    });
    if (this._cardIsLiked) {
      this._cardLike.classList.add('element__like-img_active')
    }
  }

  _checkIsMyCard() {
    if (this._cardOwnerId === this._myId) {
      this._cardDelButton.classList.add('element__delete-button_visible')
    }
  }

  _setCardEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._toggleLike()
    })
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name)
    })
    this._cardDelButton.addEventListener('click', () => {
      this._handleDeleteButton(this)
    })
  }

  checkCardLikesCounter(likes) {
    this._cardLikeCount.textContent = likes.length
  }

  generateCard() {
    this._cardBody.querySelector('.element__title').textContent = this._name
    this._cardImg.src = this._link
    this._cardImg.alt = this._name
    this.checkCardLikesCounter(this._cardLikesArr)
    this._checkMyLike()
    this._checkIsMyCard()
    this._setCardEventListeners()

    return this._cardBody
  }
}
