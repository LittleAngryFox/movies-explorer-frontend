import React from 'react';
import { Link } from 'react-router-dom';

import FormErrors from '../FormErrors/FormErrors';
import useInput from '../FormErrors/useValidation';

function Register(props) {
    const name = useInput({
        initialValue: '',
        validations: {
            minLength: 2, maxLength: 30, isLogin: true, isEmpty: true,
        },
    });
    const email = useInput({ initialValue: '', validations: { isEmail: true, isEmpty: true } });
    const password = useInput({ initialValue: '', validations: { minLength: 8, maxLength: 30, isEmpty: true } });

    function submitForm(e) {
        e.preventDefault();

        props.onRegister(name.value, email.value, password.value);

        //если нет ошибки - очищаем поля
        if (props.reportApi) {
            name.setValue('');
            email.setValue('');
            password.setValue('');

            name.setIsDirty(false);
            email.setIsDirty(false);
            password.setIsDirty(false);
        }
    }

    return (
        <section className='form-data' >

            <h2 className='form-data__title'>Добро пожаловать!</h2>

            <form className='form' noValidate onSubmit={submitForm}>
                <fieldset className='form-reg'>

                    <div className='form-label'>
                        <p className='form-title'>Имя</p>
                        <input type='text' name='name' id='name' maxLength='30' minLength='2' required className='form-input' value={name.value} onBlur={name.onBlur} onChange={name.onChange} />
                        {(name.isDirty && !(name.valid.isValid))
                            && <FormErrors formErrors={name.valid.isErrorMessage} />}
                    </div>

                    <div className='form-label'>
                        <p className='form-title'>E-mail</p>
                        <input type='email' name='email' id='email' className='form-input' required value={email.value} onChange={email.onChange} onBlur={email.onBlur} />
                        {(email.isDirty && !(email.valid.isValid))
                            && <FormErrors formErrors={email.valid.isErrorMessage} />}
                    </div>

                    <div className='form-label'>
                        <p className='form-title'>Пароль</p>
                        <input type='password' name='password' id='password' maxLength='30' minLength='8' required className='form-input' value={password.value} onChange={password.onChange} onBlur={password.onBlur} />
                        {(password.isDirty && !(password.valid.isValid))
                            && <FormErrors formErrors={password.valid.isErrorMessage} />}
                    </div>

                    <div className='form-submit'>
                        <span className={`form-submit__placeholder ${!(props.apiError.value) && 'form-submit__placeholder-hidden'}`} id='form-submit-error'>{props.apiError.message}</span>

                        <button type='submit' className='button-submit' disabled={!(name.valid.isValid) || !(email.valid.isValid) || !(password.valid.isValid)}>Зарегистироваться</button>
                    </div>

                </fieldset>

            </form>

            <p className='form-data__again'>Уже зарегистрированы? <Link to='/signin' className='form-data__link'>Войти</Link></p>

        </section>
    );
}

export default Register;
