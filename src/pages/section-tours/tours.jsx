import React from 'react';
import './tours.scss'

import {Heading} from '../../components/custom-header/custom-header.component'
import {FancyCard} from '../../components/fancy-card/fancy-card'
import {Button} from '../../components/button/button.component'
const data = {
    cardInfo_1:{
        header : 'The Sea Explorer',
        list : ['3 day tours','Up to 30 people','2 tour guides','sleep in cozy hotel','Difficulty: easy'],
        value: '$297',
        imageWithStyle: 'card__picture--1',
        headWithStyle : '--1',
        backGradient:'-1'
    },
    cardInfo_2:{
        header : 'The Forest Hiker',
        list : ['7 day tours','Up to 40 people','6 tour guides','sleep in provided tents','Difficulty: medium'],
        value: '$400',
        imageWithStyle: 'card__picture--2',
        headWithStyle : '--2',
        backGradient:'-2'
    },
    cardInfo_3:{
        header : 'The Snow Adventurer',
        list : ['5 day tours','Up to 15 people','3 tour guides','sleep in cozy hotel','Difficulty: hard'],
        value: '$297',
        imageWithStyle: 'card__picture--3',
        headWithStyle : '--3',
        backGradient:'-3'
    }
}

export const Tours = () =>(
    <section className="section-toures">
        <div className="u-center-text u-margin-bottom-medium">
            <Heading>Most Popular tours</Heading>
        </div>
            <div className='row'>
                <div className='col-1-of-3'>
                    <FancyCard 
                    imageWithStyle={data.cardInfo_1.imageWithStyle} 
                    header={data.cardInfo_1.header} 
                    list={data.cardInfo_1.list.map(e => <li>{e}</li>)} 
                    value={data.cardInfo_1.value}
                    headWithStyle={data.cardInfo_1.headWithStyle}
                    backGradient={data.cardInfo_1.backGradient}
                    />
                </div>
                <div className='col-1-of-3'>
                <FancyCard 
                    imageWithStyle={data.cardInfo_2.imageWithStyle} 
                    header={data.cardInfo_2.header} 
                    list={data.cardInfo_2.list.map(e => <li>{e}</li>)} 
                    value={data.cardInfo_2.value}
                    headWithStyle={data.cardInfo_2.headWithStyle}
                    backGradient={data.cardInfo_2.backGradient}
                    />
                </div>
                <div className='col-1-of-3'>
                <FancyCard 
                    imageWithStyle={data.cardInfo_3.imageWithStyle} 
                    header={data.cardInfo_3.header} 
                    list={data.cardInfo_3.list.map(e => <li>{e}</li>)} 
                    value={data.cardInfo_3.value}
                    headWithStyle={data.cardInfo_3.headWithStyle}
                    backGradient={data.cardInfo_3.backGradient}
                    />
                </div>
            </div>
            <div className="u-center-text u-margin-bottom-medium">
               <Button isGreen='btn--green'>Discover All Tours</Button>
            </div>
    </section>
)