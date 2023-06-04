import { initialCards } from './cards.js'
import { Card } from './Card.js'
import { formValidators } from './FormValidator.js'

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

//постоянные elements
const elementsContainer = document.querySelector('.elements')

//постоянные element-template
const elementTemplateCard = document.querySelector('.element-template').content

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')
const cardsAddButton = document.querySelector('.profile__add-button')

//закрытие popup по escape
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault()
    const activePopup = document.querySelector('.popup_opened')
    closePopup(activePopup)
  }
}

//закрытие popup по клику мыши
function closeByClick(evt) {
  const clickTarget = evt.target
  if ([...clickTarget.classList].includes('popup_opened')) {
    closePopup(clickTarget)
  }
}

//открытие popup
function openPopup(modal) {
  modal.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
  document.addEventListener('mousedown', closeByClick)
}

//закрытие popup
function closePopup(modal) {
  modal.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEsc)
  document.removeEventListener('mousedown', closeByClick)
}

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

//*генерация новой карточки
function createCard(card) {
  const newCard = new Card(
    card,
    elementTemplateCard,
    openPopup,
    popupTypeImg,
    popupImg,
    popupCaption
  )
  return newCard.generateCard()
}


//*добавление карточек по-умолчанию
initialCards.map((card) => {
  elementsContainer.append(createCard(card))
})

//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit)
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
  closePopup(popupEdit)
})

//!прослушивание элементов cardsAddButton и popupNewCard
//открытие
cardsAddButton.addEventListener('click', () => {
  openPopup(popupNewCard)
  formValidators['card-form'].toggleButtonState()
})

//сохранение
popupCardForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const cardObj = { name: popupCardName.value, link: popupCardLink.value }
  elementsContainer.prepend(createCard(cardObj))
  popupCardForm.reset()
  closePopup(popupNewCard)
})

//!кнопка закрытия popup'ов
document.querySelectorAll('.popup__close-button').forEach((button) => {
  const buttonsPopup = button.closest('.popup') // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)) // закрыли попап
})
