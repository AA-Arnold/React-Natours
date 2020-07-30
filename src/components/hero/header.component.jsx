import React from 'react';
import { Button } from '../button/button.component'
import logo from '../../assets/logo-white.png'

import './header.styles.css'

export const Header = () => (
    <header className='header'>
        <div className='logo-box'>
            <img alt='logo' src={logo} className='logo' />
        </div>
        <div className='text-box'>
            <h1 className='heading-primary'>
                <span className='heading-primary-main'>Outdoors</span>
                <span className='heading-primary-sub'>is where life happens</span>
            </h1>

            <Button animated>Discover out tours</Button>
        </div>

    </header>
)