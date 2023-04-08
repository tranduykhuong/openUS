import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Header.module.css';
import { Loading } from '../../components/loading/Loading';
import ButtonCT from '../../components/button/ButtonCT';

const Header = () => {
    return (
        <div className={classes.header}>
            {/* <Button className="h-10" variant="success">Success</Button> */}
            {/* <ButtonCT borderRadius primary>Hello</ButtonCT> */}

            <div>
                <nav className={`${'navbar'} ${'navbar-expand-lg'} ${'navbar-light'} ${'bg-light py-3'}`}>
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            {' '}
                            <i className="fa fa-snowflake-o fa-lg text-primary mr-2" />
                            <strong>Snowflake</strong>
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
                                <li className="nav-item active">
                                    <a href="#" className="nav-link">
                                        {' '}
                                        Home{' '}
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="#" className="nav-link">
                                        {' '}
                                        About{' '}
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="#" className="nav-link">
                                        {' '}
                                        Services{' '}
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <button
                                        type="button"
                                        class="btn btn-outline-info mr-2 mt-2 border-0"
                                        data-mdb-ripple-color="dark"
                                    >
                                        Login
                                    </button>
                                </li>
                                <li className="nav-item active mx-0">
                                    <button
                                        type="button"
                                        class="btn btn-outline-success mt-2 border-0"
                                        data-mdb-ripple-color="dark"
                                    >
                                        Register
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="bg-light">
                    <div className="container py-5">
                        <div className="row h-100 align-items-center py-5">
                            <div className="col-lg-6">
                                <h1 className="display-4">About us page</h1>
                                <p className="lead text-muted mb-0">
                                    Create a minimal about us page using Bootstrap 4.
                                </p>
                                <p className="lead text-muted">
                                    Snippet by{' '}
                                    <a href="https://bootstrapious.com/snippets" className="text-muted">
                                        <u>Bootstrapious</u>
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <img
                                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
                                    alt
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-5">
                    <div className="container py-5">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                                    Learn More
                                </a>
                            </div>
                            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                                <img
                                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg"
                                    alt
                                    className="img-fluid mb-4 mb-lg-0"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 px-5 mx-auto">
                                <img
                                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
                                    alt
                                    className="img-fluid mb-4 mb-lg-0"
                                />
                            </div>
                            <div className="col-lg-6">
                                <i className="fa fa-leaf fa-2x mb-3 text-primary" />
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light py-5">
                    <div className="container py-5">
                        <div className="row mb-4">
                            <div className="col-lg-5">
                                <h2 className="display-4 font-weight-light">Our team</h2>
                                <p className="font-italic text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;














