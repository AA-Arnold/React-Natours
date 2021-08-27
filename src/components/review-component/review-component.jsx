import React from 'react';
import './review-component.scss'

export const ReviewComponent = ({Profilepic, name, header, body}) => (
    <div className="row-story">
                <div className="story">
                    <figure className="story__shape">
                        <img src={Profilepic} alt="Person on a tour" className='story__img' />
                        <figcaption className="story__caption">{name}</figcaption>
                    </figure>

                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">{header}</h3>
                        <p>{body}</p>
                    </div>
                </div>
    </div>
)