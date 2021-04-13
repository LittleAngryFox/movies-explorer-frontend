import React from 'react';
import './FormErrors.css'


function FormErrors(props) {
    return (
        <div className="form-error">
            {   props.formErrors ?
                <span>
                    {props.formErrors}
                </span> :
                <span>

                </span>
            }
        </div>
    );

}

export default FormErrors;