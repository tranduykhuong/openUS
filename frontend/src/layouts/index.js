import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

Layout.propTypes = {

};

export default Layout;
