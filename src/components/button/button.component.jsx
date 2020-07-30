import React from 'react';

import './button.styles.css'

export const Button = ({ children, animated }) => (
    <a href='#i' className={`${animated ? 'btn btn-white btn-animated' : 'btn btn-white'}`}>{children}</a>
)