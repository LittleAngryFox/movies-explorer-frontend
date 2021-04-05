import React from 'react';
import './Profile.css'


function Profile() {

    //стейт ссылки на картинку
    const [name, setName] = React.useState('Елена');
    //стейт названия картинки
    const [email, setEmail] = React.useState('pochta@yandex.ru');

    // Обработчик изменения инпута обновляет стейт
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function change() {
        const input = document.querySelectorAll(".account__input");
        const buttonSave = document.querySelector('.form-submit');
        const buttonChange = document.querySelectorAll('.account__button');
        buttonSave.classList.remove('form-submit_hidden');
        buttonChange.forEach((item) => item.classList.add('account__button_hidden'));

        input.forEach((item) => {
            item.readOnly = false;
        })
    }

    function save(e) {
        e.preventDefault();
        const buttonSave = document.querySelector('.form-submit');
        const buttonChange = document.querySelectorAll('.account__button');
        buttonSave.classList.add('form-submit_hidden');
        buttonChange.forEach((item) => item.classList.remove('account__button_hidden'));

    }

    return (
        <section className="account">

            <h2 className="account__hello">Привет, Елена!</h2>

            <form className="form">
                <fieldset className="account__form">

                    <div className="row">
                        <p className="account__title">Имя</p>
                        <input type="text" name="name" id="name" maxLength="30" minLength="2" className="account__input" onChange={handleChangeName} value={name} readOnly />
                    </div>

                    <div className="row">
                        <p className="account__title">E-mail</p>
                        <input type="email" name="email" id="email" className="account__input" onChange={handleChangeEmail} value={email} readOnly />
                    </div>

                    <div className="form-submit form-submit_hidden">
                        <span className="form-submit__placeholder" id="form-submit-error">Ошибка</span>
                        <button type="submit" className="button-submit button-submit_place_profile" onSubmit={save}>Сохранить</button>
                    </div>

                </fieldset>
            </form>

            <button type="button" className="account__button account__button-reg" onClick={change}>Редактировать</button>
            <button type="button" className="account__button account__button-out">Выйти из аккаунта</button>

        </section>
    );
}


export default Profile;