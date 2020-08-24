import React from 'react';
import './image-composition.styles.scss'
import nat_1 from '../../assets/nat-1-large.jpg'
import nat_2 from '../../assets/nat-2-large.jpg'
import nat_3 from '../../assets/nat-3-large.jpg'


export const ImageComposition = () => (
    <div className="composition">
        <img alt='' src={nat_1} className='composition__photo composition__photo--p1' />
        <img alt='' src={nat_2} className='composition__photo composition__photo--p2' />
        <img alt='' src={nat_3} className='composition__photo composition__photo--p3' />
    </div>
)