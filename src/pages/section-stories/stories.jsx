import React from 'react';
import {Heading} from '../../components/custom-header/custom-header.component'

import './stories.scss'
import { ReviewComponent } from '../../components/review-component/review-component';

import {reviewData} from '../../data/data'
import { LearnMore } from '../../components/learn-more-button/learn-more-button.component';

import v1 from '../../assets/video.mp4'
import v2 from '../../assets/video.webm'

export const Stories = () => (
    <section className="section-stories">
            <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={v1} type="video/mp4"/>
                        <source src={v2} type="video/webm"/>
                        Your browser is not supported!
                    </video>
            </div>
        <div className="u-center-text u-margin-bottom-medium">
            <Heading>We make people genuinely happy</Heading>
        </div>
                <ReviewComponent 
                Profilepic={reviewData.reviewData_1.profilePicture} 
                name={reviewData.reviewData_1.name} 
                header={reviewData.reviewData_1.header} 
                body={reviewData.reviewData_1.review}/>

                <ReviewComponent 
                Profilepic={reviewData.reviewData_2.profilePicture} 
                name={reviewData.reviewData_2.name} 
                header={reviewData.reviewData_2.header} 
                body={reviewData.reviewData_2.review}/>

            <div className="u-center-text u-margin-bottom-medium">
                <LearnMore>Read all stories</LearnMore>
            </div>
    </section>
)