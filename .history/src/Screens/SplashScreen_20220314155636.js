import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
//import { Context } from '../Contexts/authContext';

const SplashScreen = ({navigation}) => {
    //const { attemptLocalSignin } = useContext(Context);


    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
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