import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Home from '../pages/home/Home';
import NotFound from '../pages/notFound';
import Layout from './../layouts/index';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import RoadMap from '../pages/roadmap/roadMap';
import DetailRoadMap from '../pages/roadmap/detailRoadMap/detailRoadMap';
import FieldInterview from '../pages/fieldinterview/fieldInterview';
import MockInterview from '../pages/mockinterview/mockInterview';

const Navigation = () => {
    const authenticated = true;
    return (
        <main>
            <Routes>
                <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
                    <Route element={<Layout />}>
                        <Route path="/home" name="home" element={<Home />} />
                        <Route path="/login" name="login" element={<Login />} />
                        <Route path="/register" name="register" element={<Register />} />
                        <Route path="/roadmap/detail" name="detail" element={<DetailRoadMap />} />
                        <Route path="/roadmap" name="roadmap" element={<RoadMap />} />
                    </Route>
                    <Route path="/field" name="fieldInterview" element={<FieldInterview />} />
                    <Route path="/mockinter" name="mockInterview" element={<MockInterview />} />

                    <Route path="*" name="notFound" element={<NotFound />} />
                </Route>
            </Routes>
        </main>
    );
};

export default Navigation;
