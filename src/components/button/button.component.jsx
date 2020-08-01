import React from 'react';

import './button.styles.scss'

export const Button = ({ children, isAnimated }) => (
    <a href='#i' className={`${isAnimated ? 'btn btn--white btn--animated' : 'btn btn--white'}`}>{children}</a>
)