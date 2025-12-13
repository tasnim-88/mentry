import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading/Loading';
import { Navigate } from 'react-router';

const FreeOnlyRoute = ({children}) => {

    const { user, loading } = useAuth();

    if (loading) return <Loading />;

    if (user?.isPremium) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default FreeOnlyRoute;