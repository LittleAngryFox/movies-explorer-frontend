import React from 'react';

function FilterChecbox(props) {
  function handleChangeShortFilm(e) {
    props.onCheckBox(e.target.checked);
  }

  return (

    <fieldset className="search-form__short-film">
      <input className="search-form__check" type="checkbox" id="short-film" defaultChecked={props.shortFilm} value={props.shortFilm} onClick={handleChangeShortFilm} disabled={props.shortFilm ? false : props.disabled} />
      <label className="search-form__check-label" htmlFor="short-film">
        <dl className="search-form__check-switch"></dl>
      </label>
      <p className="search-form__check-title">Короткометражки</p>
    </fieldset>

  );
}

export default FilterChecbox;
