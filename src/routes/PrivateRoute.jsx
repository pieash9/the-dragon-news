import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return   <Spinner animation="border" variant="primary" />
    }
    console.log(location)
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace/>
};

export default PrivateRoute;


/**
 * private route
 * ------------------- steps ----------------------
 * 
 * 1. check user is log in or not
 * 2. if user is logged in then allow the user to visit the route
 * 3. Else redirect the user to the login page
 * 4. setup the private router
 * 5. handle loading
 * 
*/