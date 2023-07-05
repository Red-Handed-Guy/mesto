export default class UserInfo {
  constructor({ title, subtitle, avatar }) {
    this._title = document.querySelector(title)
    this._subtitle = document.querySelector(subtitle)
    this._avatar = document.querySelector(avatar)
  }

  getUserInfo() {
    const info = {
      name: this._title.textContent, 
      about: this._subtitle.textContent,
    }
    return info
  }

  setUserInfo({name, about}) {
    this._title.textContent = name
    this._subtitle.textContent = about
  }

  setUserAvatar({avatar}) {
    this._avatar.src = avatar
  }
}