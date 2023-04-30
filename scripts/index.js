//постоянные popup
const popup = document.querySelector('.popup')
const popupForm = popup.querySelector('.popup__form')
const popupCloseButton = popup.querySelector('.popup__close-button')
const popupName = popup.querySelector('.popup__textarea_type_name')
const popupSubtitle = popup.querySelector('.popup__textarea_type_subtitle')

//постоянные elements, element-template
const elementsContainer = document.querySelector('.elements')
//клонирование 
const elementTemplateCard = document.querySelector('.element-template').content
const elementCard = elementTemplateCard.querySelector('.element').cloneNode(true)

//! удалить
// console.log(elementTemplateCard)
// console.log(elementCard)

//постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')

//карточки по-умолчанию
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
//! удалить
// console.log(initialCards[0]['name'])

//открытие popup
function openPopup() {
  popupName.value = profileTitle.textContent
  popupSubtitle.value = profileSubtitle.textContent
  popup.classList.add('popup_opened')
}

//закрытие popup
function closePopup() {
  popup.classList.remove('popup_opened')
}

//сохранение popup
function savePopup(event) {
  event.preventDefault()
  profileTitle.textContent = popupName.value
  profileSubtitle.textContent = popupSubtitle.value
  closePopup()
}

//*карточка elements (помещение значений в строки html)
const makeElementCard = (name, link) => {
  const elementCard = elementTemplateCard.querySelector('.element').cloneNode(true)
  elementCard.querySelector('.element__title').textContent = name
  elementCard.querySelector('.element__img').src = link
  elementCard.querySelector('.element__img').alt = name
  return elementCard
}



//*добавление карточек по-умолчанию
const initialCardsList = initialCards.map((element) => {
  const initialCard = makeElementCard(element.name, element.link)
  return initialCard 
});

elementsContainer.append(...initialCardsList)



//! удалить
// console.log(makeElementCard('Архыз','https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'))
// console.log(initialCardsList)

//прослушивание элементов
profileEditButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
popupForm.addEventListener('submit', savePopup)
