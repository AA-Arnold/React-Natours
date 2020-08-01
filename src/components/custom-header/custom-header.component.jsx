import React from 'react';

import './custom-header.styles.scss'

export const Heading = ({ children }) => (
    <h2 className="heading-secondary">
        {children}
    </h2>
)