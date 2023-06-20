import { initialCards } from './cards.js'
import { Card } from './Card.js'
import { formValidators } from './FormValidator.js'
import Section from './Section.js'
import { cardsContainer, popupOpened, popupProfile, popupNewCCard, popupIImg, popupCloseButton } from '../utils/components.js'
import Popup from './Popup.js'
import PopupWithImage from './PopupWithImage.js'

//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditName = popupEdit.querySelector('.popup__input_type_name')
const popupEditSubtitle = popupEdit.querySelector('.popup__input_type_subtitle')
const popupEditForm = popupEdit.querySelector('.popup__form')

//постоянные popupNewCard
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupCardName = popupNewCard.querySelector('.popup__input_type_name')
const popupCardLink = popupNewCard.querySelector('.popup__input_type_subtitle')
const popupCardForm = popupNewCard.querySelector('.popup__form')

//постоянные popupTypeImg
const popupTypeImg = document.querySelector('.popup_type_img')
const popupImg = popupTypeImg.querySelector('.popup__img')
const popupCaption = popupTypeImg.querySelector('.popup__img-caption')

//постоянные element-template
const elementTemplateCard = document.querySelector('.element-template').content

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')
const cardsAddButton = document.querySelector('.profile__add-button')


const ProfilePopup = new Popup (popupProfile)
const ImgPopup = new PopupWithImage (popupIImg)

//добавление текста со страницы в value попапа
function putTextInForm() {
  popupEditName.value = profileTitle.textContent
  popupEditSubtitle.value = profileSubtitle.textContent
}

//добавление текста из value попапа на страницу
function putTextInPage() {
  profileTitle.textContent = popupEditName.value
  profileSubtitle.textContent = popupEditSubtitle.value
}

//!1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

const defaultCardList = new Section({
  data: initialCards,
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
        }
      },
    )
    const readyCard = newCard.generateCard();
    return readyCard
  }
}, cardsContainer);

//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  ProfilePopup.openPopup()
  ProfilePopup.setEventListeners()
  putTextInForm()
  formValidators['profile-form'].toggleButtonState()
  const inputList = popupEditForm.querySelectorAll('.popup__input')
  inputList.forEach((inputItem) => {
    formValidators['profile-form'].checkInputVailidity(inputItem)
  })
})

//сохранение
popupEditForm.addEventListener('submit', (event) => {
  event.preventDefault()
  putTextInPage()
})

//!прослушивание элементов cardsAddButton и popupNewCard
//открытие
cardsAddButton.addEventListener('click', () => {
  formValidators['card-form'].toggleButtonState()
})

//сохранение
popupCardForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const cardObj = { name: popupCardName.value, link: popupCardLink.value }
  defaultCardList.newItem(cardObj)
  popupCardForm.reset()
})


defaultCardList.renderItems()

