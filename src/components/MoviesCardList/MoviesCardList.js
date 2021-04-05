import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList(props) {
    return (
        <>
            <div className="movies">

                <ul className="movies__list">
                    {/*                     {props.cards.map((card) => (
                        if(card.save)  <MoviesCard card={card} key={card._id} />
                    ))} */}
                    <MoviesCard save={props.save} />
                </ul>


                <div className="more">
                    <button type="button" className="more__button">Ещё</button>
                </div>
            </div>
        </>
    );
}

export default MoviesCardList;