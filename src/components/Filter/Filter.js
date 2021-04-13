function MoviesFilter(movies, key, shortFilm) {
    if (shortFilm) {
        let findMovies = movies.filter((movie) => {
            return Filter(movie, key);
        })
        return findMovies.filter((movie) => {
            return FindShortFilm(movie);
        })
    }
    return movies.filter((movie) => {
        return Filter(movie, key);
    })
}

function FindShortFilm({ duration }) {
    if (duration < 40)
        return true
    return false;
}

function Filter({ country, direction, nameRU, nameEN, description, year }, key) {
    let filterCheck = false;
    while (!filterCheck) {
        if (country != null) {
            (country.toLowerCase()).includes(key.toLowerCase()) && (filterCheck = true);
        }
        if (direction != null) {
            direction.toLowerCase().includes(key.toLowerCase()) && (filterCheck = true);
        }
        if (nameRU != null) {
            nameRU.toLowerCase().includes(key.toLowerCase()) && (filterCheck = true);
        }
        if (nameEN != null) {
            nameEN.toLowerCase().includes(key.toLowerCase()) && (filterCheck = true);
        }
        if (description != null) {
            description.toLowerCase().includes(key.toLowerCase()) && (filterCheck = true);
        }
        if (year != null) {
            year.toLowerCase().includes(key.toLowerCase()) && (filterCheck = true);
        }
        break;
    }

    return filterCheck;
}

export default MoviesFilter;