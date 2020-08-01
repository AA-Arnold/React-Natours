import React from 'react';
import { Heading } from '../../components/custom-header/custom-header.component'

import './main.styles.scss'

export const Main = () => (
    <main>
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-8">
                <Heading>Exciting tours for adventurous people</Heading>
            </div>

            <div className='row'>
                <div className='col-1-of-2'>
                    Text content
                </div>
                <div className='col-1-of-2'>
                    image composition
                </div>
            </div>

        </section>
    </main>
) 