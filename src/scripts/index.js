import '../pages/index.css'
import {
  initialCards,
  cardsContainer,
  popupProfileSelector,
  popupNewCardSelector,
  popupImgSelector,
  profileSelectors,
} from '../utils/components.js'

import { Card } from '../components/Card.js'
import { formValidators } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

//!поиск констант в DOM
//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form')

//постоянные element-template
const elementTemplateCard = document.querySelector('.element-template').content

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')

//кнопка вызова формы добавления новой карточки
const cardsAddButton = document.querySelector('.profile__add-button')

//!создание классов
const userInfoFromPage = new UserInfo(profileSelectors)

const imgPopup = new PopupWithImage(popupImgSelector)

const profilePopup = new PopupWithForm(popupProfileSelector, {
  makeSubmitForm: (inputValues) => {
    userInfoFromPage.setUserinfo(inputValues.name, inputValues.subtitle)
    profilePopup.closePopup()
  },
})

const cardsPopup = new PopupWithForm(popupNewCardSelector, {
  makeSubmitForm: (inputValues) => {
    const cardObj = {
      name: inputValues['card-name'],
      link: inputValues['card-url'],
    }
    defaultCardList.addItem(createCard(cardObj), 'prepend')
    cardsPopup.closePopup()
  },
})

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  cardsContainer
)

//!Функция создания карточки
function createCard(item) {
  const newCard = new Card(
    item,
    elementTemplateCard,
    {
      handleCardClick: (imgPath, text) => {
        imgPopup.openPopup(imgPath, text)
      },
    }
  )
  const readyCard = newCard.generateCard()
  return readyCard
}


//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  profilePopup.openPopup()
  profilePopup.setInputValues(userInfoFromPage.getUserinfo())
  formValidators['profile-form'].toggleButtonState()
  const inputList = popupEditForm.querySelectorAll('.popup__input')
  inputList.forEach((inputItem) => {
    formValidators['profile-form'].checkInputVailidity(inputItem)
  })
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
defaultCardList.renderItems()