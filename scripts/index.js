import { Card } from './Card.js'
import { formValidators } from './FormValidator.js'
import Section from './Section.js'
import {
  initialCards,
  cardsContainer,
  popupProfileSelector,
  popupNewCardSelector,
  popupImgSelector,
  profileSelectors,
} from '../utils/components.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'
import UserInfo from './UserInfo.js'

//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form')

//постоянные popupTypeImg
const popupTypeImg = document.querySelector('.popup_type_img')
const popupImg = popupTypeImg.querySelector('.popup__img')
const popupCaption = popupTypeImg.querySelector('.popup__img-caption')

//постоянные element-template
const elementTemplateCard = document.querySelector('.element-template').content

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')

//кнопка вызова формы добавления новой карточки
const cardsAddButton = document.querySelector('.profile__add-button')

//!создание классов
const UserInfoFromPage = new UserInfo(profileSelectors)

const ImgPopup = new PopupWithImage(popupImgSelector)

const ProfilePopup = new PopupWithForm(popupProfileSelector, {
  makeSubmitForm: (event) => {
    event.preventDefault()
    UserInfoFromPage.setUserinfo(
      ProfilePopup.inputList.name,
      ProfilePopup.inputList.subtitle
    )
    ProfilePopup.closePopup()
  },
})

const CardsPopup = new PopupWithForm(popupNewCardSelector, {
  makeSubmitForm: (event) => {
    event.preventDefault()
    const cardObj = {
      name: CardsPopup.inputList['card-name'],
      link: CardsPopup.inputList['card-url'],
    }
    defaultCardList.addItem(cardObj, 'prepend')
    CardsPopup.closePopup()
  },
})

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(
        item,
        elementTemplateCard,
        popupTypeImg,
        popupImg,
        popupCaption,
        {
          handleCardClick: (imgPath, text) => {
            ImgPopup.openPopup(imgPath, text)
            ImgPopup.setEventListeners()
          },
        }
      )
      const readyCard = newCard.generateCard()
      return readyCard
    },
  },
  cardsContainer
)

//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  ProfilePopup.openPopup()
  ProfilePopup.setEventListeners()
  ProfilePopup.setInputValues(UserInfoFromPage.getUserinfo())
  formValidators['profile-form'].toggleButtonState()
  const inputList = popupEditForm.querySelectorAll('.popup__input')
  inputList.forEach((inputItem) => {
    formValidators['profile-form'].checkInputVailidity(inputItem)
  })
})

//!прослушивание элементов cardsAddButton и popupNewCard
//открытие
cardsAddButton.addEventListener('click', () => {
  CardsPopup.openPopup()
  CardsPopup.setEventListeners()
  formValidators['card-form'].toggleButtonState()
})

defaultCardList.renderItems()