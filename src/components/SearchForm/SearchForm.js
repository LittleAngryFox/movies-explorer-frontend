import React from 'react';
import './SearchForm.css';
import FilterChecbox from '../FilterChecbox/FilterChecbox';

import FormErrors from '../FormErrors/FormErrors';
import useInput from '../FormErrors/useValidation';

function SearchForm(props) {
    //инпут ключа поиска
    const moviesKey = useInput(({
        initialValue: props.keySearch,
        validations: { isEmpty: true },
    }));

    function handleSubmitForm(e) {
        e.preventDefault();

        props.onSearchFilm(moviesKey.value, props.saveFilmUser);
        moviesKey.setIsDirty(false);
    }

    return (
        <div className="search">

            <form className="search-form" noValidate onSubmit={handleSubmitForm}>
                <fieldset className="search-form__name-film">
                    {(moviesKey.isDirty && !(moviesKey.valid.isValid))
                        && <FormErrors addClassName={false}
                            formErrors={moviesKey.valid.isErrorMessage} />}
                    <input className="search-form__input" type="search" name="moviesKey" placeholder="Фильм" required value={moviesKey.value} onChange={moviesKey.onChange} onBlur={moviesKey.onBlur} />
                    <button className="search-form__button" type="submit" disabled={!(moviesKey.valid.isValid)}></button>
                </fieldset>
                <FilterChecbox disabled={props.movies.length === 0}
                    onCheckBox={props.onCheckBox}
                    shortFilm={props.shortFilm} />
            </form>
        </div>
    );
}

export default SearchForm;
