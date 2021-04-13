import React from 'react';

function FilterChecbox(props) {
  const [shortFilm, setShortFilm] = React.useState(false);

  function handleChangeShortFilm(e) {
    setShortFilm(e.target.checked);
    props.onCheckBox(e.target.checked);
  }

  return (

    <fieldset className="search-form__short-film">
      <input className="search-form__check" type="checkbox" id="short-film" value={shortFilm} onClick={handleChangeShortFilm} />
      <label className="search-form__check-label" htmlFor="short-film">
        <dl className="search-form__check-switch"></dl>
      </label>
      <p className="search-form__check-title">Короткометражки</p>
    </fieldset>

  );

}

export default FilterChecbox;
