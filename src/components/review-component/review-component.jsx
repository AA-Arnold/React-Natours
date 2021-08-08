import React from 'react';
import './review-component.scss'

export const ReviewComponent = ({Profilepic, name, header, body}) => (
    <div class="row">
                <div class="story">
                    <figure class="story__shape">
                        <img src={Profilepic} alt="Person on a tour" className='story__img' />
                        <figcaption class="story__caption">{name}</figcaption>
                    </figure>

                    <div class="story__text">
                        <h3 class="heading-tertiary u-margin-bottom-small">{header}</h3>
                        <p>{body}</p>
                    </div>
                </div>
    </div>
)