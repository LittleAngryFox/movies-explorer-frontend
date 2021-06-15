import React from 'react';
import { Link } from 'react-router-dom';

import FormErrors from '../FormErrors/FormErrors';
import useInput from '../FormErrors/useValidation';

function Login(props) {
    const email = useInput({
        initialValue: '',
        validations: {
            isEmail: true, isEmpty: true,
        },
    });
    const password = useInput({
        initialValue: '',
        validations: {
            minLength: 8, maxLength: 30, isEmpty: true,
        },
    });

    function submitForm(e) {
        e.preventDefault();

        props.onLogin(email.value, password.value);

        email.setValue('');
        password.setValue('');

        email.setIsDirty(false);
        password.setIsDirty(false);
    }

    return (
        <section className='form-data'>

            <h2 className='form-data__title'>Рады видеть!</h2>

            <form className='form' onSubmit={submitForm}>
                <fieldset className='form-reg'>
                    <div className='form-label'>
                        <p className='form-title'>E-mail</p>
                        <input type='email' name='email' id='email' required className='form-input' value={email.value} onChange={email.onChange} onBlur={email.onBlur} />
                        {(email.isDirty && !(email.valid.isValid))
                            && <FormErrors formErrors={email.valid.isErrorMessage} />}
                    </div>
                    <div className='form-label'>
                        <p className='form-title'>Пароль</p>
                        <input type='password' name='password' id='password' required className='form-input' value={password.value} onChange={password.onChange} onBlur={password.onBlur} />
                        {(password.isDirty && !(password.valid.isValid))
                            && <FormErrors formErrors={password.valid.isErrorMessage} />}
                    </div>
                    <div className='form-submit'>

                        <span className={`form-submit__placeholder ${!(props.apiError.value) && 'form-submit__placeholder-hidden'}`} id='form-submit-error'>{props.apiError.message}</span>

                        <button type='submit' className='button-submit' disabled={!(email.valid.isValid) || !(password.valid.isValid)}>Войти</button>
                    </div>

                </fieldset>

            </form>

            <p className='form-data__again'>Ещё не зарегистрированы? <Link to='/signup' className='form-data__link'>Зарегистироваться</Link></p>

        </section>
    );
}

export default Login;
