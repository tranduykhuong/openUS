import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Header.module.css';
import { Loading } from '../../components/loading/Loading';
import ButtonCT from '../../components/button/ButtonCT';
import Slider from '../Slider/Slider';
import { useNavigate } from 'react-router';

const Header = () => {
    const [logined, setLogined] = useState(false);
    const navigate = useNavigate()
    const logoClick = () => {
        navigate('/');
    };


    return (
        <div className={classes.header}>
            <nav className={`${'navbar'} ${'navbar-expand-lg'} ${'navbar-light'} ${'bg-light py-3'}`}>
                <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center" onClick={() => navigate('/home')}>
                        {' '}
                        <strong className="text-uppercase font-weight-bold text-primary">OpenUs</strong>
                    </a>
                    <button
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-2 active">
                                <a href="#" onClick={() => navigate('/home')} className="nav-link text-uppercase">
                                    {' '}
                                    Trang chủ{' '}
                                </a>
                            </li>
                            <li className="nav-item mx-2 active">
                                <a
                                    href="#"
                                    onClick={() => navigate('/field')}
                                    className="nav-link text-uppercase"
                                >
                                    {' '}
                                    Mock Interview{' '}
                                </a>
                            </li>
                            <li className="nav-item mx-2 active">
                                <a href="#" onClick={() => navigate('/roadmap')} className="nav-link text-uppercase">
                                    {' '}
                                    Lộ trình{' '}
                                </a>
                            </li>
                            <li className="nav-item mx-2 active">
                                <button
                                    type="button"
                                    className={`${'btn'} ${'btn-outline-info'} ${'border-0'} ${'text-uppercase'} ${
                                        classes['text-btn']
                                    }`}
                                    data-mdb-ripple-color="dark"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
