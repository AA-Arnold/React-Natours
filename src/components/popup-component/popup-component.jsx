import React from 'react';
import { Button } from '../button/button.component';
import { Heading } from '../custom-header/custom-header.component';

import img from '../../assets/nat-8.jpg'
import img2 from '../../assets/nat-9.jpg'

import './popup-component.scss'

export const PopUp = () => (
    <div className="popup" id="popup">
    <div className="popup__content">
        <div className="popup__left">
            <img src={img} alt="Tour" className="popup__img" />
            <img src={img2} alt="Tour2" className="popup__img" />
        </div>
        <div className="popup__right">
            <a href="#section-tours" className="popup__close">&times;</a>
            <Heading>Start booking now</Heading>
            <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
            <p className="popup__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                euismod nisi porta.
            </p>
            <Button isGreen='btn--green'>Book Now</Button>
        </div>
    </div>
</div>
)