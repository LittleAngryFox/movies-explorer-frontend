import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    //стейт ссылки на картинку
    const [name, setName] = React.useState(currentUser.name);
    //стейт названия картинки
    const [email, setEmail] = React.useState(currentUser.email);
    //стейт активности импута
    const [readOnly, setReadOnly] = React.useState(true);
    //стейт видимости кнопки сохранения
    const [hiddenSaveButton, setHiddenSaveButton] = React.useState(true);
    //стейт видимости кнопки редактирования
    const [hiddenChangeButton, setHiddenChangeButton] = React.useState(false);

    // Обработчик изменения инпута обновляет стейт
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleActiveSaveButton() {
        //показать кнопку сохранения
        setHiddenSaveButton(false);
        //скрыть кнопки управления редактированием
        setHiddenChangeButton(true);
        //сделать инпуты редактируемыми
        setReadOnly(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setHiddenSaveButton(true);
        setReadOnly(true);
        setHiddenChangeButton(false);

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            email,
        });
    }


    return (
        <section className="account">

            <h2 className="account__hello">Привет, Елена!</h2>

            <form className="form" noValidate onSubmit={handleSubmit}>
                <fieldset className="account__form">

                    <div className="row">
                        <p className="account__title">Имя</p>
                        <input type="text" name="name" id="name" maxLength="30" minLength="2" className="account__input" onChange={handleChangeName} value={name} readOnly={readOnly} />
                    </div>

                    <div className="row">
                        <p className="account__title">E-mail</p>
                        <input type="email" name="email" id="email" className="account__input" onChange={handleChangeEmail} value={email} readOnly={readOnly} />
                    </div>

                    <div className={`form-submit ${hiddenSaveButton && "form-submit_hidden"}`}>
                        <span className="form-submit__placeholder" id="form-submit-error">Ошибка</span>
                        <button type="submit" className="button-submit button-submit_place_profile">Сохранить</button>
                    </div>

                </fieldset>
            </form>

            <button type="button" className={`account__button account__button-reg ${hiddenChangeButton && "account__button_hidden"}`} onClick={handleActiveSaveButton}>Редактировать</button>
            <Link to='/' className={`account__button account__button-out ${hiddenChangeButton && "account__button_hidden"}`} onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </section>
    );
}


export default Profile;