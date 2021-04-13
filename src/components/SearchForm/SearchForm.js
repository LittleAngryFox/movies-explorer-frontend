import React from 'react';
import './SearchForm.css'
import FilterChecbox from '../FilterChecbox/FilterChecbox';

function SearchForm() {
    return (
        <div className="search">

            <form className="search-form">
                <fieldset className="search-form__name-film">
                    <input className="search-form__input" type="search" name="film" placeholder="Фильм" required/>
                    <button className="search-form__button" type="submit"></button>
                </fieldset>
                <FilterChecbox />
            </form>
        </div>
    );
}

export default SearchForm;