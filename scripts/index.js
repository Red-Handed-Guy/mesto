//постоянные popupEdit
const popupEdit = document.querySelector('.popup_type_edit')

//постоянные popupNewCard
const popupNewCard = document.querySelector('.popup_type_new-card')

//постоянные elements, element-template
const elementsContainer = document.querySelector('.elements')

//постоянные element-template
const elementTemplateCard = document.querySelector('.element-template').content

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')
const cardsAddButton = document.querySelector('.profile__add-button')

//универсальная кнопка закрытия
const closeButton = (somePopup) => {
  return somePopup.querySelector('.popup__close-button')
}
//универсальное поле popupName
const popupName = (somePopup) => {
  return somePopup.querySelector('.popup__textarea_type_name')
}
//универсальное поле popupSubtitle
const popupSubtitle = (somePopup) => {
  return somePopup.querySelector('.popup__textarea_type_subtitle')
}
//универсальное поле popupForm
const popupForm = (somePopup) => {
  return somePopup.querySelector('.popup__form')
}

//карточки по-умолчанию
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]

//открытие popup
function openPopup(modal) {
  modal.classList.add('popup_opened')
}

//закрытие popup
function closePopup(modal) {
  modal.classList.remove('popup_opened')
}

//*карточка element (помещение значений в строки html-карточки)
const makeElementCard = (name, link) => {
  const elementCard = elementTemplateCard
    .querySelector('.element')
    .cloneNode(true)
  elementCard.querySelector('.element__title').textContent = name
  elementCard.querySelector('.element__img').src = link
  elementCard.querySelector('.element__img').alt = name
  const likeToggle = elementCard.querySelector('.element__like-img')
  //лайк
  likeToggle.addEventListener('click', () => {
    likeToggle.classList.toggle('element__like-img_active')
  })
  //удалить
  elementCard
    .querySelector('.element__delete-button')
    .addEventListener('click', () => elementCard.remove())
  return elementCard
}

//*добавление карточек по-умолчанию
const initialCardsList = initialCards.map((element) => {
  const initialCard = makeElementCard(element.name, element.link)
  elementsContainer.append(initialCard)
})

//!прослушивание элементов profileEditButton и popupEdit
//открытие
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit)
  popupName(popupEdit).value = profileTitle.textContent
  popupSubtitle(popupEdit).value = profileSubtitle.textContent
})
//закрытие
closeButton(popupEdit).addEventListener('click', () => closePopup(popupEdit))
//сохранение
popupForm(popupEdit).addEventListener('submit', (event) => {
  event.preventDefault()
  profileTitle.textContent = popupName(popupEdit).value
  profileSubtitle.textContent = popupSubtitle(popupEdit).value
  closePopup(popupEdit)
})

//!прослушивание элементов cardsAddButton и popupNewCard
//открытие
cardsAddButton.addEventListener('click', () => {
  openPopup(popupNewCard)
})
//закрытие
closeButton(popupNewCard).addEventListener('click', () =>
  closePopup(popupNewCard)
)
//сохранение
popupForm(popupNewCard).addEventListener('submit', (event) => {
  event.preventDefault()
  elementsContainer.prepend(
    makeElementCard(
      popupName(popupNewCard).value,
      popupSubtitle(popupNewCard).value
    )
  )
  closePopup(popupNewCard)
})
