import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import './layout.css';


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
                                        <span>224 Nguyen Van Cu, Quan 5, Tp Ho Chi Minh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30 text-center">
                                <div className={classes['single-cta']}>
                                    <i className="fas fa-phone" />
                                    <div className={classes['cta-text']}>
                                        <h4>Call us</h4>
                                        <span>0814488935</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30 text-center">
                                <div className={classes['single-cta']}>
                                    <i className="far fa-envelope-open" />
                                    <div className={classes['cta-text']}>
                                        <h4>Mail us</h4>
                                        <span>openus2023@gmail.com</span>
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
                                        Copyright © 2023, Hackathon{' '}
                                        <a href="https://codepen.io/anupkumar92/">UTE</a>
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${'text-lg-right'} ${'col-xl-6'} ${'col-lg-6'} ${'ml-5'} ${'d-none'} ${'text-right'} ${'d-lg-block'}`}
                            >
                               
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;










