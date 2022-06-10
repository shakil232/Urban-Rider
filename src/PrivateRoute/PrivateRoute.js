import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    const location = useLocation()

    return (
        isLoading ?
            <div className="d-flex align-content-center justify-content-center p-5">
                <FadeLoader color={"#36D7B7"} loading={isLoading}
                    width={8}
                    height={18}
                    radius={10}
                    margin={10}
                />
            </div>
            :

            user?.email ?
                <Outlet />
                :
                <Navigate
                    to="/login"
                    state={{ from: location }}
                    replace
                />
    );
};

export default PrivateRoute;