import React from 'react';
import './SearchForm.css'
import FilterChecbox from '../FilterChecbox/FilterChecbox';

import FormErrors from '../FormErrors/FormErrors'
import useValidation from '../FormErrors/useValidation';

function useInputSearch({ initialValue, validations }) {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setIsDirty] = React.useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setIsDirty(true);
    }

    return { value, onChange, onBlur, setValue, setIsDirty, isDirty, valid: { ...valid } };
}


function SearchForm(props) {

    const moviesKey = useInputSearch(({ initialValue: '', validations: { isEmpty: true, } }));

    function handleSubmitForm(e) {
        e.preventDefault();
        props.onSearchFilm(moviesKey.value, props.saveFilmUser);
        // moviesKey.setValue('');
        moviesKey.setIsDirty(false);
    };

    return (
        <div className="search">

            <form className="search-form" noValidate onSubmit={handleSubmitForm}>
                <fieldset className="search-form__name-film">
                    {(moviesKey.isDirty && !(moviesKey.valid.isValid)) && <FormErrors formErrors={moviesKey.valid.isErrorMessage} />}
                    <input className="search-form__input" type="search" name="moviesKey" placeholder="Фильм" required value={moviesKey.value} onChange={moviesKey.onChange} onBlur={moviesKey.onBlur} />
                    <button className="search-form__button" type="submit" disabled={!(moviesKey.valid.isValid)}></button>
                </fieldset>
                <FilterChecbox onCheckBox={props.onCheckBox} />
            </form>
        </div>
    );
}

export default SearchForm;