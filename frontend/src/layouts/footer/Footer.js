import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import './layout.css';
import img2 from './img/img-2.jpg';
import img3 from './img/img-3.jpg';

function Button({ content }) {
    return (
        <div
            className="px-16 shadow min-h-min leading-[50px] text-lg
                        text-white font-semibold button-color max-w-sm rounded-tl-2xl rounded-br-2xl animate-bounce
                        hover:cursor-pointer button-color_hover hover:shadow-lg  hover:animate-none"
        >
            {content}
        </div>
    );
}

const Footer = () => {
    return (
        <div className={classes.footer}>
            <footer className={`${classes['footer-section']}`}>
                <div className="container">
                    <div className={`${classes['footer-cta']} ${'pt-5'} ${'pb-5'}`}>
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30 text-center">
                                <div className={classes['single-cta']}>
                                    <div className={classes['cta-text']}>
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30 text-center">
                                <div className={classes['single-cta']}>
                                    <i className="fas fa-phone" />
                                    <div className={classes['cta-text']}>
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30 text-center">
                                <div className={classes['single-cta']}>
                                    <i className="far fa-envelope-open" />
                                    <div className={classes['cta-text']}>
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['copyright-area']}>
                    <div className="container">
                        <div className="row">
                            <div className={`${'text-center'} ${'text-lg-left'} ${'col-xl-4'} ${'col-lg-4'}`}>
                                <div className={classes['copyright-text']}>
                                    <p>
                                        Copyright © 2018, All Right Reserved{' '}
                                        <a href="https://codepen.io/anupkumar92/">Anup</a>
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${'text-lg-right'} ${'col-xl-6'} ${'col-lg-6'} ${'ml-5'} ${'d-none'} ${'text-right'} ${'d-lg-block'}`}
                            >
                                <div className={classes['footer-menu']}>
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#">Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;










