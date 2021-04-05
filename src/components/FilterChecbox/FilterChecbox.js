import React from 'react';

function FilterChecbox() {
  const [shortFilm, setShortFilm] = React.useState(true);

  function handleChangeShortFilm(e) {
    setShortFilm(e.target.checked);
  }

  return (

    <fieldset className="search-form__short-film">
      <input className="search-form__check" type="checkbox" id="short-film" value={shortFilm} onChange={handleChangeShortFilm} />
      <label className="search-form__check-label" htmlFor="short-film">
        <dl className="search-form__check-switch"></dl>
      </label>
      <p className="search-form__check-title">Короткометражки</p>
    </fieldset>

  );

}

export default FilterChecbox;
