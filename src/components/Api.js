export default class Api {
  constructor({headers, link}) {
    this._headers = headers
    this._fetchLink = link
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards() {
    return fetch(`${this._fetchLink}/cards`, {
      headers: this._headers,
    })
    .then(this._handleResponse)
  }

  toggleCardLike(cardId, method) {
    return fetch(`${this._fetchLink}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers,
    })
    .then(this._handleResponse)
  }

  setNewCard({ name, link }) {
    return fetch(`${this._fetchLink}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then(this._handleResponse)
  }

  delCard(cardId) {
    return fetch(
      `${this._fetchLink}/cards/${cardId}`,
      {
        method: 'DELETE',
        headers: this._headers,
      }
    )
    .then(this._handleResponse)
  }

  getUserProfile() {
    return fetch(`${this._fetchLink}/users/me`, {
      headers: this._headers,
    })
    .then(this._handleResponse)
  }

  setUserProfile({ name, about }) {
    return fetch(`${this._fetchLink}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then(this._handleResponse)
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._fetchLink}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
    .then(this._handleResponse)
  }
}


