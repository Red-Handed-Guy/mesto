// переменные popup
let popup = document.querySelector('.pop-up')
let popupForm = popup.querySelector('.pop-up__container')
let popupCloseButton = popup.querySelector('.pop-up__close-button')
let popupName = popup.querySelector('.pop-up__name')
let popupSubtitle = popup.querySelector('.pop-up__subtitle')
let popupSaveButton = popup.querySelector('.pop-up__save-button')

// переменные profile
let profile = document.querySelector('.profile')
let profileEditButton = profile.querySelector('.profile__edit-button')
let profileTitle = profile.querySelector('.profile__title')
console.log(profileTitle.textContent)
console.log(profileTitle.value)
let profileSubtitle = profile.querySelector('.profile__subtitle')

//открытие popup
function openPopup() {
  popupName.value = profileTitle.textContent
  popupSubtitle.value = profileSubtitle.textContent
  popup.classList.add('pop-up_opened')
}

//закрытие popup
function closePopup(event) {
  popup.classList.remove('pop-up_opened')
  event.preventDefault()
}

//сохранение popup
function savePopup(event) {
  event.preventDefault()
  popup.classList.remove('pop-up_opened')
  profileTitle.textContent = popupName.value
  profileSubtitle.textContent = popupSubtitle.value
}

profileEditButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
popupForm.addEventListener('submit', savePopup)
