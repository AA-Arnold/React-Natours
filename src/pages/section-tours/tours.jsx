import React from 'react';
import './tours.scss'

import {Heading} from '../../components/custom-header/custom-header.component'
import {FancyCard} from '../../components/fancy-card/fancy-card'

export const Tours = () =>(
    <section className="section-toures">
        <div className="u-center-text u-margin-bottom-big">
            <Heading>Most Popular tours</Heading>
            <div className='row'>
                <div className='col-1-of-3'>
                    <FancyCard/>
                </div>
                <div className='col-1-of-3'>
                    col 1 of 3
                </div>
                <div className='col-1-of-3'>
                    col 1 of 3
                </div>
            </div>
        </div>
    </section>
)