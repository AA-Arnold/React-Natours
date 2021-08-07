import React from 'react';
import './fancy-card.scss'

export const FancyCard = () =>(
    <div className='card'>
        <div className="card__side card__side--front">
         inverted text front
        </div>
        <div className="card__side card__side--back card__side--back-1">
         inverted text back
        </div>
    </div>
)