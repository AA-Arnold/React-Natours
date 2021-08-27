import React from 'react';
import Logo from '../../assets/logo-green-2x.png'

import './footer.scss'

export const Footer = () => (
    <footer className="footer">
            <div className="footer__logo-box">
                <img src={Logo} alt="Full logo" className="footer__logo"/>
            </div>
            <div className="row row-footer">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="/#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="/#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="/#" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="/#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="/#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="/#" className="footer__link">Amasoh Arnold</a> while taking <a href="/#" className="footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann.
                    </p>
                </div>
            </div>
        </footer>
)