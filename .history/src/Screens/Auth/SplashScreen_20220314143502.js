import React, { useEffect, useContext } from 'react';
import { Context } from '../../Contexts/authContext';

const SplashScreen = ({navigation}) => {
    const { attemptLocalSignin } = useContext(Context);

    useEffect(() => {
        attemptLocalSignin(); 
    }, []);

    return navigation.navigate('SignIn');
};

export default SplashScreen