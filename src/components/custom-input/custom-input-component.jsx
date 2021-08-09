import React from 'react';

import './custom-input-component.scss'

export const CustomInput = ({idName,children}) => (
    <div className="input__group">
        <input type="text" className="form__input" placeholder={children} id={idName} required/>
        <label htmlFor={idName} className="form__label">{children}</label>
    </div>
)