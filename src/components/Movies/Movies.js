import React from 'react';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'


function Movies(props) {
    return (
        <>
            <SearchForm onSearchFilm={props.onSearchFilm} saveFilmUser={false} onCheckBox={props.onCheckBox} />
            <MoviesCardList saveFilmUser={false}  movies={props.moviesSearch} keySearch={props.keySearch} moviesNotFound={props.moviesNotFound} onClickSaved={props.onClickSaved} sizeWindow={props.sizeWindow} />
        </>
    );
}


export default Movies;