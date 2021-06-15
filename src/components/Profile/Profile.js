import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import FormErrors from '../FormErrors/FormErrors';
import useInput from '../FormErrors/useValidation';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const name = useInput({
        initialValue: currentUser.name,
        validations: {
            minLength: 2, maxLength: 30, isLogin: true, isEmpty: true,
        },
    });

    const email = useInput({
        initialValue: currentUser.email,
        validations: {
            isEmail: true, isEmpty: true,
        },
    });

    function activeSaveButton() {
        props.handleActiveSaveButton();
    }

    function undoSaveButton() {
        props.handleUndoSaveButton();
    }

    function closeSaveButton() {
        if (!props.apiError.value) {
            props.handleCloseSaveButton();
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            email,
        });

        closeSaveButton();
    }

    if (!currentUser._id) {
        return (<section className='account'>
            <h2 className='account__hello'>Загрузка данных пользователя...</h2>
            <Link to='/' className={`account__button account__button_out ${props.hiddenChangeButton && 'account__button_hidden'}`} onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </section>);
    }
    else {
        return (<section className='account'>

            <h2 className='account__hello'>Привет, {currentUser.name}!</h2>

            <form className='form' noValidate onSubmit={handleSubmit}>
                <fieldset className='account__form'>

                    <div className='row'>
                        <p className='account__title'>Имя</p>
                        <input type='text' name='name' id='name' maxLength='30' minLength='2' className='account__input' onChange={name.onChange} onBlur={name.onBlur} value={name.value} readOnly={props.readOnly} />
                        {(name.isDirty && !(name.valid.isValid))
                            && <FormErrors addClassName={true}
                                formErrors={name.valid.isErrorMessage} />}
                    </div>

                    <div className='row'>
                        <p className='account__title'>E-mail</p>
                        <input type='email' name='email' id='email' className='account__input' onChange={email.onChange} onBlur={email.onBlur} value={email.value} readOnly={props.readOnly} />
                        {(email.isDirty && !(email.valid.isValid))
                            && <FormErrors addClassName={true}
                                formErrors={email.valid.isErrorMessage} />}
                    </div>

                    <div className={`form-submit ${props.hiddenSaveButton && 'form-submit_hidden'}`}>
                        {props.apiError.value && <span className='form-submit__placeholder' id='form-submit-error'>{props.apiError.message}</span>}
                        <button type='submit' className='button-submit button-submit_place_profile' disabled={((currentUser.name === name.value) && (currentUser.email === email.value)) || (!(name.valid.isValid) || !(email.valid.isValid))}>Сохранить</button>
                        <button type='button' className='account__button account__button_undo' onClick={undoSaveButton}>Отмена</button>
                    </div>

                </fieldset>
            </form>

            <button type='button' className={`account__button account__button_reg ${props.hiddenChangeButton && 'account__button_hidden'}`} onClick={activeSaveButton}>Редактировать</button>
            <Link to='/' className={`account__button account__button_out ${props.hiddenChangeButton && 'account__button_hidden'}`} onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </section >);
    }
}

export default Profile;
