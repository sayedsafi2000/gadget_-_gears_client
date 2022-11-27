import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import useBuyer from '../Hooks/useBuyer';

const BuyersRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const [isBuyer,isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();
    if(loading || isBuyerLoading){
        return <div className="text-center">
            <span className="sr-only">Loading...</span>
        </div>
    }
    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default BuyersRoute;