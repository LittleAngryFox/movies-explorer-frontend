import React from 'react';
import { Link } from "react-router-dom";


function MoviesCardList() {
    return (
        <section className="form-data">

            <h2 className="form-data__title">Добро пожаловать!</h2>

            <form className="form">
                <fieldset className="form-reg">
                    <p className="form-title">Имя</p>
                    <input type="text" name="login" id="name" maxLength="30" minLength="2" required className="form-input" />

                    <p className="form-title">E-mail</p>
                    <input type="email" name="email" id="email" required className="form-input" />

                    <p className="form-title">Пароль</p>
                    <input type="password" name="lopasswordgin" id="password" maxLength="30" minLength="8" required className="form-input" />

                    <div className="form-submit">
                        <span className="form-submit__placeholder" id="form-submit-error">Ошибка</span>
                        <button type="submit" className="button-submit">Зарегистироваться</button>
                    </div>

                </fieldset>

            </form>

            <p className="form-data__again">Уже зарегистрированы? <Link to="/signin" className="form-data__link">Войти</Link></p>


        </section>
    );
}

export default MoviesCardList;