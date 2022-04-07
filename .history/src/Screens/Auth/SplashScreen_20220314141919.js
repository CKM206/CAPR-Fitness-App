import React, { useEffect, useContext } from 'react';
import { Context } from '../Contexts/authContext';

const SplashScreen = () => {
    const { attemptLocalSignin } = useContext(Context);

    useEffect(() => {
        attemptLocalSignin(); 
    }, []);

    return null;
};

export default SplashScreen