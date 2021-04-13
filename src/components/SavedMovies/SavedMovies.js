import React from 'react';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'


function SavedMovies(props) {

    return (
        <>
            <SearchForm onSearchFilm={props.onSearchFilm} saveFilmUser={true} onCheckBox={props.onCheckBox} />
            <MoviesCardList saveFilmUser={true} movies={props.moviesSearch} keySearch={props.keySearch} moviesNotFound={props.moviesNotFound} onClickSaved={props.onClickSaved} sizeWindow={props.sizeWindow} />
        </>
    );
}


export default SavedMovies;