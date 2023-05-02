//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditName = popupEdit.querySelector('.popup__textarea_type_name')
const popupEditSubtitle = popupEdit.querySelector(
  '.popup__textarea_type_subtitle'
)
const popupEditForm = popupEdit.querySelector('.popup__form')

//постоянные popupNewCard
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupCardName = popupNewCard.querySelector('.popup__textarea_type_name')
const popupCardLink = popupNewCard.querySelector(
  '.popup__textarea_type_subtitle'
)
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

//открытие popup
function openPopup(modal) {
  modal.classList.add('popup_opened')
}

//закрытие popup
function closePopup(modal) {
  modal.classList.remove('popup_opened')
}

//!карточка element (помещение значений в строки html-тегов)
const makeElementCard = (card) => {
  const elementCard = elementTemplateCard
    .querySelector('.element')
    .cloneNode(true)
  const cardImg = elementCard.querySelector('.element__img')
  const likeToggle = elementCard.querySelector('.element__like-img')

  elementCard.querySelector('.element__title').textContent = card.name
  cardImg.src = card.link
  cardImg.alt = card.name

  //слушатель лайка
  likeToggle.addEventListener('click', () => {
    likeToggle.classList.toggle('element__like-img_active')
  })

  //слушатель кнопки удалить карточку
  elementCard
    .querySelector('.element__delete-button')
    .addEventListener('click', () => elementCard.remove())

  //слушатель картинки (открыть popup)
  elementCard.querySelector('.element__img').addEventListener('click', () => {
    openPopup(popupTypeImg)
    popupImg.src = card.link
    popupImg.alt = card.name
    popupCaption.textContent = card.name
  })
  return elementCard
}

//*добавление карточек по-умолчанию
initialCards.map((cards) => {
  const initialCard = makeElementCard(cards)
  elementsContainer.append(initialCard)
})

//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit)
  popupEditName.value = profileTitle.textContent
  popupEditSubtitle.value = profileSubtitle.textContent
})

//сохранение
popupEditForm.addEventListener('submit', (event) => {
  event.preventDefault()
  profileTitle.textContent = popupEditName.value
  profileSubtitle.textContent = popupEditSubtitle.value
  closePopup(popupEdit)
})

//!прослушивание элементов cardsAddButton и popupNewCard
//открытие
cardsAddButton.addEventListener('click', () => {
  openPopup(popupNewCard)
})

//сохранение
popupCardForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const cardObj = { name: popupCardName.value, link: popupCardLink.value }
  elementsContainer.prepend(makeElementCard(cardObj))
  popupCardName.value = ''
  popupCardLink.value = ''
  closePopup(popupNewCard)
})

//!кнопка закрытия popup'ов (спасибо за способ!)
document.querySelectorAll('.popup__close-button').forEach((button) => {
  const buttonsPopup = button.closest('.popup') // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)) // закрыли попап
})
