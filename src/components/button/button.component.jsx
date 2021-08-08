import React from 'react';

import './button.styles.scss'

export const Button = ({ children, isAnimated, isGreen}) => (
    <a href='#i' className={`${isGreen} ${isAnimated ? 'btn btn--white btn--animated' : 'btn btn--white'}`}>{children}</a>
)