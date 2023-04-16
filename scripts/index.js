// постоянные popup
const popup = document.querySelector('.popup')
const popupForm = popup.querySelector('.popup__form')
const popupCloseButton = popup.querySelector('.popup__close-button')
const popupName = popup.querySelector('.popup__textarea_type_name')
const popupSubtitle = popup.querySelector('.popup__textarea_type_subtitle')

// постоянные profile
const profile = document.querySelector('.profile')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')

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

profileEditButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
popupForm.addEventListener('submit', savePopup)
