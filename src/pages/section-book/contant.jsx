import React from 'react';
import { Heading } from '../../components/custom-header/custom-header.component';
import { CustomInput } from '../../components/custom-input/custom-input-component';
import { RadioButton } from '../../components/custom-radio/custom-radio';
import { FormButton } from '../../components/form-button/form-button';

import './contact.scss'

export const Contact = () => (
    <section className="section-book">
        <div className="row">
            <div className="book">
            <div className="book__form">
                            <form action="#" className="form">
                                <Heading>Most Popular tours</Heading>
                                <CustomInput idName={"name"}>Full name</CustomInput>
                                <CustomInput idName={"email"}>Email address</CustomInput>

                                <RadioButton idName={'small'} nameCategory={'tourgroup'}>Small tour group</RadioButton>
                                <RadioButton idName={'large'} nameCategory={'tourgroup'}>Large tour group</RadioButton>

                                 <div className="u-margin-top-medium">
                                    <FormButton>Next step</FormButton>
                                 </div>
{/* 
                                <div className="form__group">
                                    <button className="btn btn--green">Next step &rarr;</button>
                                </div> */}
                            </form>
                        </div>
            </div>
        </div>
    </section>
)