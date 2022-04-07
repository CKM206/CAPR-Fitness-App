/**
 *  Author:   Calvin May
 *  
 *  Date:     03/13/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: App.js
 *  Description: This is the entry point for the Application, it imports from several libraries and 
 *              modules that are needed in the app and configures the application.
 */

// Make Imports from React, React Native, Expo, and MongoDB
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import * as Font from 'expo-font';           //  - Currently Disabled, no need to focus on fonts right now
// import AppLoading from 'expo-app-loading';   //  - Currently Disabled, no need to focus on fonts right now
import { enableScreens } from 'react-native-screens';
import { navigationRef } from './NavigationRef';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import App Navigators
import MainDrawerNavigator from './src/Navigation/MainNavigator';
import AuthStackNavigator from './src/Navigation/AuthNavigator';

// Import App Screens
//import SplashScreen from './src/Screens/Auth/SplashScreen';

// Data Contexts/Providers
import { Provider as AuthProvider } from './src/Contexts/authContext';  // Import the Auth Provider
import  {Context}  from './src/Contexts/authContext';
// Enable Native Screens to assist performance
enableScreens();


// // Font Loading Helper Function          - Currently Disabled, no need to focus on fonts right now
// const fetchFonts = () => {
//     return Font.loadAsync({
//       'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//     });
//   };


const App = () => {

    const { state } = useContext(Context);
    const [isSignedIn, setIsSignedIn] = useState(false);
    // // Font State                        -Currently Disabled, no need to focus on fonts right now
    // const [fontLoaded, setFontLoaded] = useState(false);

    // // Load Fonts
    // if (!fontLoaded) {
    //     return (
    //     <AppLoading startAsync={fetchFonts}
    //                 onFinish={() => setFontLoaded(true)}
    //                 onError={(err) => console.log(err)}
    //     />
    //     );
    // }

    // if(state.isLoading) {
    //     return <SplashScreen />
    // }
    
    if(state.token) {
        setIsSignedIn(true);
    }

    console.log(state);

    return (
    <NavigationContainer ref={navigationRef}>

        { isSignedIn ? 
        (
            <MainDrawerNavigator name='MainDrawerNavigator'/>
            ) : 
            
            (
            <AuthStackNavigator name='AuthStackNavigator' />
        )
        }
    </NavigationContainer>
);
};

// App Creation
export default () => {

    

    return (
        <AuthProvider>
            <App />
        </AuthProvider>
        
    );
};