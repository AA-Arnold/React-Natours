import React from 'react';
import { Heading } from '../../components/custom-header/custom-header.component'

import './main.styles.scss'
import { LearnMore } from '../../components/learn-more-button/learn-more-button.component';
import { ImageComposition } from '../../components/image-composition/image-composition.component'

export const Main = () => (
    <main>
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <Heading>Exciting tours for adventurous people</Heading>
            </div>

            <div className='row'>
                <div className='col-1-of-2'>
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Exercitationem, necessitatibus! Dolorem quasi animi,
                        repellat esse eos pariatur repudiandae error at perferendis,
                        officia fugiat possimus nostrum quia eum voluptate labore exercitationem!
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live advantures like you never had before</h3>
                    <p className="paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis debitis dolore quas amet eligendi in, nulla aperiam a explicabo id dolorum
                        repudiandae natus obcaecati quaerat deleniti possimus velit! Autem, eligendi.
                    </p>

                    <LearnMore>Learn More &rarr; </LearnMore>
                </div>
                <div className='col-1-of-2'>
                    <ImageComposition />
                </div>
            </div>

        </section>
    </main>
) 