import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Home from '../pages/home/Home';
import NotFound from '../pages/notFound';
import Layout from './../layouts/index';

const Navigation = () => {
  const authenticated = true;
  return (
    <main>
      <Routes>
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
          <Route element={<Layout />}>
            <Route
              path="/home"
              name="home"
              element={<Home />}
            />
          </Route>
          <Route path="*" name="notFound" element={<NotFound />} />
        </ Route>
      </Routes>
    </main>
  );
};

export default Navigation;
