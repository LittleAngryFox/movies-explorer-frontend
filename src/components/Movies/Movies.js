import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Loader from '../Loader/Loader';

function Movies(props) {
    return (
        <>
            <SearchForm
                saveFilmUser={false}

                shortFilm={props.shortFilm}
                onCheckBox={props.onCheckBox}
                onSearchFilm={props.onSearchFilm}
                searchStart={props.searchStart}

                keySearch={props.keySearch}
                movies={props.moviesSearch} />

            {props.searchStart &&
                <Loader page={MoviesCardList}
                    load={!props.searchEnd}
                    saveFilmUser={false}
                    searchStart={props.searchStart}
                    searchStatus={props.searchStatus}
                    movies={props.moviesSearch}
                    keySearch={props.keySearch}
                    savedMovies={props.savedMovies}
                    onClickSaved={props.onClickSaved}
                    sizeWindow={props.sizeWindow} />}
        </>
    );
}

export default Movies;
