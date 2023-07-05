import '../pages/index.css'
import {
  cardsContainer,
  popupProfileSelector,
  popupNewCardSelector,
  popupImgSelector,
  profileSelectors,
  popupDelCardSelector,
  popupAvatarSelector,
  myId,
} from '../utils/components.js'

import { Card } from '../components/Card.js'
import { formValidators } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

//!поиск констант в DOM
//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form')

//постоянные popupAvatar
const popupAvatarForm = document.querySelector('.popup_type_new-avatar')
const popupAvatarInput = popupAvatarForm.querySelector(
  '.popup__input_type_subtitle'
)
const popupAvatarInputError = popupAvatarForm.querySelector('.popup__error')
//постоянные element-template
const elementTemplateCard = document.querySelector('.element-template').content

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileEditAvatarButton = profile.querySelector(
  '.profile__avatar-wrapper'
)

//кнопка вызова формы добавления новой карточки
const cardsAddButton = document.querySelector('.profile__add-button')

//!создание классов
const newApi = new Api({
  headers: {
    authorization: '6cdd3a12-976b-437a-94d1-14ffdd3a84d4',
    'Content-Type': 'application/json',
  },
  link: 'https://mesto.nomoreparties.co/v1/cohort-70',
})

const userInfoFromPage = new UserInfo(profileSelectors)

const imgPopup = new PopupWithImage(popupImgSelector)

const cardDelPopup = new PopupWithConfirmation(popupDelCardSelector, {
  makeSubmitForm: (card) => {
    cardDelPopup.popupLoading(true, 'Удаление...', 'Да')
    newApi
      .delCard(card.cardId)
      .then(() => {
        card.deleteCard()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        cardDelPopup.closePopup()
        cardDelPopup.popupLoading(false, 'Удаление...', 'Да')
      })
  },
})

const avatarPopup = new PopupWithForm(popupAvatarSelector, {
  makeSubmitForm: (inputValues) => {
    avatarPopup.popupLoading(true, 'Сохранение...', 'Сохранить')
    newApi
      .setUserAvatar({ avatar: inputValues['avatar-url'] })
      .then((res) => {
        userInfoFromPage.setUserAvatar(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        avatarPopup.closePopup()
        avatarPopup.popupLoading(false, 'Сохранение...', 'Сохранить')
      })
  },
})

const profilePopup = new PopupWithForm(popupProfileSelector, {
  makeSubmitForm: (inputValues) => {
    profilePopup.popupLoading(true, 'Сохранение...', 'Сохранить')
    newApi
      .setUserProfile(inputValues)
      .then((res) => {
        userInfoFromPage.setUserInfo(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        profilePopup.closePopup()
        profilePopup.popupLoading(false, 'Сохранение...', 'Сохранить')
      })
  },
})

const cardsPopup = new PopupWithForm(popupNewCardSelector, {
  makeSubmitForm: (inputValues) => {
    cardsPopup.popupLoading(true, 'Создание...', 'Создать')
    const cardObj = {
      name: inputValues['card-name'],
      link: inputValues['card-url'],
    }
    newApi
      .setNewCard(cardObj)
      .then((res) => {
        defaultCardList.addItem(createCard(res), 'prepend')
      })
      .catch((err) => console.log(err))
      .finally(() => {
        cardsPopup.closePopup()
        cardsPopup.popupLoading(false, 'Создание...', 'Создать')
      })
  },
})

const defaultCardList = new Section({}, cardsContainer)

newApi
  .getInitialCards()
  .then((res) => {
    res.forEach((card) => {
      defaultCardList.addItem(createCard(card))
    })
  })
  .catch((err) => console.log(err))

newApi
  .getUserProfile()
  .then((res) => {
    userInfoFromPage.setUserInfo(res)
    userInfoFromPage.setUserAvatar(res)
  })
  .catch((err) => console.log(err))

//!Функция создания карточки
function createCard(item) {
  const newCard = new Card(
    item,
    elementTemplateCard,
    {
      handleToggleLike(cardId, method) {
        newApi
          .toggleCardLike(cardId, method)
          .then((res) => {
            newCard.checkCardLikesCounter(res.likes)
          })
          .catch((err) => console.log(err))
      },
      handleDeleteButton: (card) => {
        cardDelPopup.openPopup(card)
      },
      handleCardClick: (imgPath, text) => {
        imgPopup.openPopup(imgPath, text)
      },
    },
    myId
  )
  const readyCard = newCard.generateCard()
  return readyCard
}

//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  profilePopup.openPopup()
  profilePopup.setInputValues(userInfoFromPage.getUserInfo())
  formValidators['profile-form'].toggleButtonState()
  const inputList = popupEditForm.querySelectorAll('.popup__input')
  inputList.forEach((inputItem) => {
    formValidators['profile-form'].checkInputVailidity(inputItem)
  })
})

//!прослушивание элементов profileEditAvatarButton
profileEditAvatarButton.addEventListener('click', () => {
  avatarPopup.openPopup()
  formValidators['avatar-form'].hideError(
    popupAvatarInput,
    popupAvatarInputError
  )
  formValidators['avatar-form'].toggleButtonState()
})

//!прослушивание элементов cardsAddButton и popupNewCard
//открытие
cardsAddButton.addEventListener('click', () => {
  cardsPopup.openPopup()
  formValidators['card-form'].toggleButtonState()
})

//! Отрисовка дефолтных объектов и навешивание слушателей
profilePopup.setEventListeners()
cardsPopup.setEventListeners()
imgPopup.setEventListeners()
cardDelPopup.setEventListeners()
avatarPopup.setEventListeners()
