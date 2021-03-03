export class Api {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
    
    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers,
      }).then(this._getResponse);
    }

    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers,
      }).then(this._getResponse);
    }

    editUserInfo(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers,
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then(this._getResponse);
    }
  
    getNewCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers,
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then(this._getResponse);
    }
  
    deleteCard(cardId) {
      return fetch(`${this.baseUrl}/cards/${cardId}`, {
        headers: this.headers,
        method: "DELETE",
      }).then(this._getResponse);
    }
  
    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        headers: this.headers,
        method: isLiked ? "PUT" : "DELETE",
      }).then(this._getResponse);
    }
  
    updateAvatar(data) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        headers: this.headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }).then(this._getResponse);
    }

    setToken(token){
      this.headers.authorization = `Bearer ${token}` ;
    }
  
    _getResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      }
    }
  }
  
  const api = new Api({
    baseUrl: "https://api.mesto1664.students.nomoredomains.monster",
    headers: {
      "authorization": `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  });
  export default api;
  