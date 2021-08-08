import React from 'react';
// import nat_4 from '../../assets/nat-4.jpg'
import './fancy-card.scss'




export const FancyCard = ({imageWithStyle,header,list,value,headWithStyle}) =>(
    <div className='card'>
        <div className="card__side card__side--front">
          <div className={`card__picture ${imageWithStyle}`}>
              &nbsp;
          </div>
          <h4 className="card__heading">
              <span className={`card__heading-span card__heading-span${headWithStyle}`}>
                {header}
              </span>
         </h4>
         <div className="card__details">
                <ul>
                    {list}
                </ul>
         </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
                <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">{value}</p>
                    <a href="#i" className="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    </div>
)