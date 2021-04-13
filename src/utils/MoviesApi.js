class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    //загрузка начальных фильмов
    getMovies() {
        return fetch(this._baseUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                return this._checkResponse(res);                
            });
    }

}

//запросы к серверу
const apiMovies = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default apiMovies;