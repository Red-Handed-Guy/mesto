export default class UserInfo {
  constructor({ title, subtitle }) {
    this._title = document.querySelector(title)
    this._subtitle = document.querySelector(subtitle)
  }

  getUserinfo() {
    const info = {
      name: this._title.textContent, 
      subtitle: this._subtitle.textContent,
    }
    return info
  }

  setUserinfo(newTitle, newSubtitle) {
    this._title.textContent = newTitle
    this._subtitle.textContent = newSubtitle
  }
}