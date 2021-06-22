import './FormErrors.css';

function FormErrors(props) {
    return (
        <div className={`form-error ${props.addClassName && 'form-error_profile'}`}>
            {props.formErrors
                ? <span>
                    {props.formErrors}
                </span>
                : <span>

                </span>
            }
        </div>
    );
}

export default FormErrors;
