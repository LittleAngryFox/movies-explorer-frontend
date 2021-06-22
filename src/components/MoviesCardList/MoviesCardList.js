import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList(props) {
    let colMoviesInit = 12;
    if (props.sizeWindow < 1070 && props.sizeWindow >= 700) colMoviesInit = 8;
    if (props.sizeWindow < 700) colMoviesInit = 5;
    const [countMovies, setCountMovies] = React.useState(colMoviesInit);

    function handleCountMovies() {
        if (props.sizeWindow < 1070) setCountMovies(countMovies + 2);
        else { setCountMovies(countMovies + 3); }
    }

    return (
        <>
            <div className="movies">

                {(props.saveFilmUser) &&
                    ((props.searchStatus || !(props.searchStart || props.searchStatus)) ?
                        (<ul className="movies__list"> {
                            props.movies.map(
                                (movie) => (<MoviesCard saveFilmUser={props.saveFilmUser}
                                    movie={movie}
                                    onClickSaved={props.onClickSaved}
                                    key={movie.id}
                                    savedMovies={props.savedMovies} />
                                ),
                            )
                        }
                        </ul>)
                        :
                        (
                            <p className="movies_error">Ничего не найдено</p>
                        ))
                }

                {
                    (!props.saveFilmUser) &&
                    ((props.searchStatus || !(props.searchStart || props.searchStatus)) ?
                        (<ul className="movies__list"> {
                            props.movies && props.movies.filter((_moviefilter, id) => id < countMovies).map(
                                (movie) => (<MoviesCard saveFilmUser={props.saveFilmUser}
                                    movie={movie}
                                    onClickSaved={props.onClickSaved}
                                    key={movie.id}
                                    savedMovies={props.savedMovies} />
                                ),
                            )
                        }
                        </ul>)
                        :
                        (
                            <p className="movies_error">Ничего не найдено</p>
                        ))
                }

                {
                    (!props.saveFilmUser && props.movies && (props.searchStatus || !(props.searchStart || props.searchStatus)) && countMovies < props.movies.length) &&
                    (<div className="more">
                        <button type="button" className="more__button" onClick={handleCountMovies}>Ещё</button>
                    </div>)
                }
            </div>
        </>
    );
}

export default MoviesCardList;
