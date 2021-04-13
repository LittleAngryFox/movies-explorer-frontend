import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import Preloader from '../Preloader/Preloader'


function MoviesCardList(props) {
    let colMoviesInit = 12;
    if (props.sizeWindow < 1280 && props.sizeWindow >= 768)
        colMoviesInit = 8;
    if (props.sizeWindow < 768)
        colMoviesInit = 5;
    const [countMovies, setCountMovies] = React.useState(colMoviesInit);

    function handleCountMovies() {
        if (props.sizeWindow < 1280)
            setCountMovies(countMovies + 2);
        else
            setCountMovies(countMovies + 3);
    }

    function loadOrNotFound() {
        if (props.keySearch) {
            if (props.movies.length === 0 || props.moviesNotFound) {
                return (
                    <p className="movies_error">Ничего не найдено</p>
                )
            }
            return (
                <Preloader />
            );
        }
        return;
    }

    return (
        <>
            <div className="movies">
                {((props.keySearch) && (props.moviesNotFound || (props.movies.length === 0))) ?
                    loadOrNotFound()
                    :
                    <ul className="movies__list">
                        {
                            
                            props.saveFilmUser ?
                                props.movies &&
                                props.movies.map((movie) => (                                    
                                    <MoviesCard saveFilmUser={props.saveFilmUser} movie={movie} onClickSaved={props.onClickSaved} key={movie.id} />
                                ))
                                :
                                props.movies &&
                                props.movies.filter((movie, id) => id < countMovies).map((movie) => (
                                    <MoviesCard saveFilmUser={props.saveFilmUser} movie={movie} onClickSaved={props.onClickSaved} key={movie.id} />
                                ))
                        }
                    </ul>
                }
                {(!props.saveFilmUser && (countMovies < props.movies.length)) &&
                    <div className="more">
                        <button type="button" className="more__button" onClick={handleCountMovies}>Ещё</button>
                    </div>
                }
            </div>
        </>
    );
}

export default MoviesCardList;