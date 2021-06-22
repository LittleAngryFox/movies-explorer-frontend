//отбор фильмов, продолжительностью менее 40 мин
function FindShortFilm({ duration }) {
    if (duration < 40) {
        return true;
    }
    return false;
}

function Filter({ country, direction, nameRU, nameEN, description, year, }, key) {
    let searchStatus = false;
    //если фильм подходит под отбор хотя бы под один критерий
    while (!searchStatus) {
        if (country != null)
            country.toLowerCase().includes(key.toLowerCase()) && (searchStatus = true);
        if (direction != null)
            direction.toLowerCase().includes(key.toLowerCase()) && (searchStatus = true);
        if (nameRU != null)
            nameRU.toLowerCase().includes(key.toLowerCase()) && (searchStatus = true);
        if (nameEN != null)
            nameEN.toLowerCase().includes(key.toLowerCase()) && (searchStatus = true);
        if (description != null)
            description.toLowerCase().includes(key.toLowerCase()) && (searchStatus = true);
        if (year != null)
            year.toLowerCase().includes(key.toLowerCase()) && (searchStatus = true);
        break;
    }

    return searchStatus;
}

function MoviesFilter(movies, key, shortFilm) {
    //если короткометражка
    if (shortFilm) {
        //получаем список фильмов, удовлетворяющий key
        const findMovies = movies.filter((movie) => Filter(movie, key));

        //возвращаем список отобранных фильмов, продолжительностью менее 40мин
        return findMovies.filter((movie) => FindShortFilm(movie));
    }
    //если полноразмерный
    return movies.filter((movie) => Filter(movie, key));
}

export default MoviesFilter;
