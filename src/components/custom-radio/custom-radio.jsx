import React from 'react'

import './custom-radio.scss'

export const RadioButton = ({idName, nameCategory, children}) =>(
    <div className="form__radio-group">
        <input type="radio" className="form__radio-input" id={idName} name={nameCategory}/>
        <label htmlFor={idName} className="form__radio-label">
            <span className="form__radio-button"></span>
            {children}
        </label>
    </div>
)