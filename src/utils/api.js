class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject({status: res.status});
    }

    //загрузка начальных фильмов
    getSavedMovies(token) {
        return fetch(this._baseUrl + "/movies", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(res => {
                return this._checkResponse(res);
            });
    }

    //загрузка информации о пользователе
    getUserInfo(token) {
        return fetch(this._baseUrl + "/users/me", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => {
                return this._checkResponse(res);
            });
    }

    //изменение инфомарции пользователя
    patchUserInfo({ name, email }, token) {
        return fetch(this._baseUrl + "/users/me", {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value
            })
        })
            .then(res => {
                return this._checkResponse(res);
            });
    }

    //отправка карточки
    savedMovie({ id, country, director, duration, year,
        description, image, trailerLink, thumbnail, nameRU, nameEN, }, token) {
        return fetch(this._baseUrl + "/movies", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailerLink: trailerLink,
                thumbnail: thumbnail,
                id: id,
                nameRU: nameRU,
                nameEN: nameEN,
            })
        })
            .then(res => {
                return this._checkResponse(res);
            });
    }

    //удаление карточки пользователя
    deleteSavedMovie(id, token) {
        return fetch(this._baseUrl + "/movies/" + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => {
                return this._checkResponse(res);
            });
    }

    //изменение активности лайка
    changeSaveMovieStatus(isSaved, token, info) {
        return isSaved ? this.deleteSavedMovie(info.id, token) : this.savedMovie(info, token);
    }
}

//запросы к серверу
const api = new Api({
    baseUrl: 'https://api.lenin.movies.nomoredomains.club/',
    //baseUrl: 'http://localhost:3000',
});

export default api;