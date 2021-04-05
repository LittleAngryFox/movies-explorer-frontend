import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    return (
        <section className="form-data">

            <h2 className="form-data__title">Рады видеть!</h2>

            <form className="form">
                <fieldset className="form-reg">

                    <p className="form-title">E-mail</p>
                    <input type="email" name="email" id="email" required className="form-input" />

                    <p className="form-title">Пароль</p>
                    <input type="password" name="password" id="password" required className="form-input" />

                    <div className="form-submit">
                        <span className="form-submit__placeholder" id="form-submit-error">Ошибка</span>
                        <button type="submit" className="button-submit">Войти</button>
                    </div>

                </fieldset>

            </form>

            <p className="form-data__again">Ещё не зарегистрированы? <Link to="/signup" className="form-data__link">Зарегистироваться</Link></p>


        </section>
    );
}

export default Login;