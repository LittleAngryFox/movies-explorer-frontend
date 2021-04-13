import React from 'react';

function useValidation(value, validations) {
    const [isEmpty, setIsEmpty] = React.useState(true);
    const [isEmail, setIsEmail] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(false);
    const [isMinLengthError, setIsMinLengthError] = React.useState(false);
    const [isMaxLengthError, setIsMaxLengthError] = React.useState(false);
    const [isErrorMessage, setIsErrorMessage] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    function handleIsEmpty() {
        setIsEmpty(true);
        setIsErrorMessage('Необходимое поле');
    }
    function handleIsEmptyOff() {
        setIsEmpty(false);
    }

    function handleMinLength(length) {
        setIsMinLengthError(true)
        setIsErrorMessage(`Минимальная длина поля - ${length} символa(ов)`)
    }
    function handleMinLengthOff() {
        setIsMinLengthError(false);
    }

    function handleMaxLength(length) {
        setIsMaxLengthError(true)
        setIsErrorMessage(`Максимальная длина поля - ${length} символa(ов)`)
    }
    function handleMaxLengthOff() {
        setIsMaxLengthError(false);
    }

    function handleIsEmail() {
        setIsEmail(true);
        setIsErrorMessage(`Невалидный e-mail`)
    }

    function handleIsEmailOff() {
        setIsEmail(false);
    }

    function handleIsLogin() {
        setIsLogin(true);
        setIsErrorMessage("Имя может содержать латиницу, кириллицу, дефис и пробел");
    }

    function handleIsLoginOff() {
        setIsLogin(false);
    }

    React.useEffect(() => {
        for (const validation in validations) {

            switch (validation) {
                case 'minLength': {
                    value.length < validations[validation] ? handleMinLength(validations[validation]) : handleMinLengthOff();
                    break;
                }

                case 'maxLength': {
                    value.length > validations[validation] ? handleMaxLength(validations[validation]) : handleMaxLengthOff();
                    break;
                }

                case 'isEmpty': {
                    value.trim() ? handleIsEmptyOff() : handleIsEmpty()
                    break;
                }

                case 'isEmail': {
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? handleIsEmailOff() : handleIsEmail();
                    break;
                }
                case 'isLogin': {
                    const re = /^[a-zа-я\- ]+$/;
                    re.test(String(value).toLowerCase()) ? handleIsLoginOff() : handleIsLogin();
                    break;
                }

                default:
                // do nothing
            }
        }
    }, [value, validations]);

    React.useEffect(() => {
        if (isEmpty || isEmail || isMinLengthError || isMaxLengthError || isLogin) {
            setIsValid(false);
        } else {
            setIsValid(true);
            setIsErrorMessage('');
        }

    }, [isEmpty, isEmail, isMinLengthError, isMaxLengthError, isLogin,])


    return {
        isMinLengthError,
        isMaxLengthError,
        isEmpty,
        isEmail,
        isLogin,
        isErrorMessage,
        isValid,
        setIsErrorMessage,
        setIsValid,
    }
}

export default useValidation;