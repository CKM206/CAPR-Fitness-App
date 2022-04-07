import React, { useEffect, useContext } from 'react';
//import { Context } from '../Contexts/authContext';

const SplashScreen = ({navigation}) => {
    //const { attemptLocalSignin } = useContext(Context);


    return (
        <View>
            <Text> I am the Splash Screen</Text>
        </View>
    );
    // useEffect(() => {
    //     attemptLocalSignin(); 
    // }, []);
    
    //navigation.navigate('SignIn');
    return null;
};

export default SplashScreen