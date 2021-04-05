import React from 'react';
import './MoviesCard.css';
import movieOne from "../../images/pic__COLOR_pic.png";
import movieTwo from "../../images/movie.png";
import movieThree from "../../images/moviethree.png";
import movieFour from "../../images/moviefour.png";


function MoviesCard(props) {

    function likes(evt) {
        evt.target.classList.toggle("movies__list-item-button_saved");
    }

    return (
        <>
            <li className="movies__list-item">
                <h2 className="movies__list-item-name">33 слова о дизайне</h2>
                <p className="movies__list-item-duration">1ч 47м</p>
                <button type="button" className={`movies__list-item-button ${props.save ? "movies__list-item-button_delete" : "movies__list-item-button_save"}`} onClick={likes}></button>

                <img className="movies__list-item-image" src={movieOne} alt="Фильм" />
            </li>

            <li className="movies__list-item">
                <h2 className="movies__list-item-name">33 слова о дизайне</h2>
                <p className="movies__list-item-duration">1ч 47м</p>
                <button type="button" className={`movies__list-item-button ${props.save ? "movies__list-item-button_delete" : "movies__list-item-button_save"}`} onClick={likes}></button>
                <img className="movies__list-item-image"
                    src={movieTwo}
                    alt="Фильм" />
            </li>

            <li className="movies__list-item">
                <h2 className="movies__list-item-name">33 слова о дизайне</h2>
                <p className="movies__list-item-duration">1ч 47м</p>
                <button type="button" className={`movies__list-item-button ${props.save ? "movies__list-item-button_delete" : "movies__list-item-button_save"}`} onClick={likes}></button>
                <img className="movies__list-item-image"
                    src={movieThree}
                    alt="Фильм" />
            </li>

            <li className="movies__list-item">
                <h2 className="movies__list-item-name">33 слова о дизайне</h2>
                <p className="movies__list-item-duration">1ч 47м</p>
                <button type="button" className={`movies__list-item-button ${props.save ? "movies__list-item-button_delete" : "movies__list-item-button_save"}`} onClick={likes}></button>
                <img className="movies__list-item-image"
                    src={movieFour}
                    alt="Фильм" />
            </li>
        </>
    );
}


export default MoviesCard;