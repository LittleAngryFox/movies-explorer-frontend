import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    function handleLikeClick() {
        const save = props.saveFilmUser;
        props.onClickSaved(props.movie, save);
    }

    function getTimeFromMins(mins) {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return `${hours}ч ${minutes}м`;
    }

    function savebuttonActive() {
        const save = props.savedMovies.find((film) => film.id === props.movie.id.toString());
        if (save === undefined)
            return false
        else
            return true;
    }

    function activeSave() {
        return (`movies__list-item-button_save ${savebuttonActive() && 'movies__list-item-button_saved'}`);
    }

    return (
        <>
            <li className='movies__list-item'>
                <h2 className='movies__list-item-name'>{props.movie.nameRU}</h2>
                <p className='movies__list-item-duration'>{getTimeFromMins(props.movie.duration)}</p>
                <button type='button' className={`movies__list-item-button ${props.saveFilmUser ? 'movies__list-item-button_delete' : activeSave()}`} onClick={handleLikeClick}></button>

                <a href={props.movie.trailerLink} className='movies__list-item-image' target='_blank' rel='noreferrer'>
                    <img className='movies__list-item-image'
                        src={props.movie.image ? props.movie.image
                            : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'}
                        alt={props.movie.name} /></a>
            </li>
        </>
    );
}

export default MoviesCard;
