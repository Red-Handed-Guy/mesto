//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditName = popupEdit.querySelector('.popup__input_type_name')
const popupEditSubtitle = popupEdit.querySelector('.popup__input_type_subtitle')
const popupEditForm = popupEdit.querySelector('.popup__form')
const editSaveButton = popupEditForm.querySelector('.popup__save-button')

//постоянные popupNewCard
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupCardName = popupNewCard.querySelector('.popup__input_type_name')
const popupCardLink = popupNewCard.querySelector('.popup__input_type_subtitle')
const popupCardForm = popupNewCard.querySelector('.popup__form')
const cardSaveButton = popupCardForm.querySelector('.popup__save-button')

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
    const activePopup = document.querySelector('.popup_opened')
    closePopup(activePopup)
  }
}

//закрытие popup по клику мыши
function closeByClick(evt) {
  const clickTarget = evt.target
  if ([...clickTarget.classList].includes('popup_opened')) {
    const activePopup = evt.target
    closePopup(activePopup)
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
  putTextInForm()
  toggleButtonState(
    editSaveButton,
    popupEditForm.checkValidity(),
    configValidation
  )
  const inputList = popupEditForm.querySelectorAll('.popup__input')
  inputList.forEach((inputItem) => {
    checkInputVailidity(inputItem, popupEditForm, configValidation)
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
  toggleButtonState(
    cardSaveButton,
    popupCardForm.checkValidity(),
    configValidation
  )
})

//сохранение
popupCardForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const cardObj = { name: popupCardName.value, link: popupCardLink.value }
  elementsContainer.prepend(makeElementCard(cardObj))
  popupCardForm.reset()
  closePopup(popupNewCard)
})

//!кнопка закрытия popup'ов
document.querySelectorAll('.popup__close-button').forEach((button) => {
  const buttonsPopup = button.closest('.popup') // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)) // закрыли попап
})
