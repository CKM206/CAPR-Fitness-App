import React, { useEffect, useContext } from 'react';
import { Context } from '../../Contexts/authContext';

const SplashScreen = ({navigation}) => {
    const { attemptLocalSignin } = useContext(Context);

    useEffect(() => {
        attemptLocalSignin(); 
    }, []);
    
    navigation.navigate('SignIn');
    return null;
};

export default SplashScreen