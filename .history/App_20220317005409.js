/**
 *  Author:   Calvin May
 *  
 *  Date:     03/13/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: App.js
 *  Description: This is the entry point for the Application, it imports from several libraries and 
 *              modules that are needed in the app and configures the application.
 */

// Imports |  React +
import React, { useContext, useEffect } from 'react';               // Required to manage Authentication Flow
import { NavigationContainer } from '@react-navigation/native';     // Required for App Navigation

// Imports | 3rd Party
import { enableScreens } from 'react-native-screens';
import { navigationRef } from './NavigationRef';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
/* import * as Font from 'expo-font';   - Currently Disabled, no need to focus on fonts right now
 import AppLoading from 'expo-app-loading';   //  - Currently Disabled, no need to focus on fonts right now
 */

// Imports | App Navigators
import MainDrawerNavigator from './src/Navigation/MainNavigator';   // Main App Navigation
import AuthStackNavigator from './src/Navigation/AuthNavigator';    // Auth Navigation

// Import | Screens
import SplashScreen from './src/Screens/SplashScreen';

// Import | Context/Providers for State Management
import { Provider as AuthProvider } from './src/Contexts/AuthContext';          // Wraps the Application to manage Auth Flow
import  { Context as AuthContext }  from './src/Contexts/AuthContext';          // Manages Authentication State
import { Provider as ExerciseProvider } from './src/Contexts/ExerciseContext';  // Wraps the Application to Manage Exercise State
// Enable Native Screens to assist performance
enableScreens();

/* Font Loading Helper Function          - Currently Disabled, no need to focus on fonts right now
const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
  };
*/

// Create the Application Component
const App = () => {
    // Manage Authentication State
    const { state, attemptLocalSignIn } = useContext(AuthContext);

/*  // Manage Font State                  - Currently Disabled, no need to focus on fonts right now
    const [fontLoaded, setFontLoaded] = useState(false);

    // Load Fonts
    if (!fontLoaded) {
        return (
        <AppLoading startAsync={fetchFonts}
                    onFinish={() => setFontLoaded(true)}
                    onError={(err) => console.log(err)}
        />
        );
    }

    if(state.isLoading) {
        return <SplashScreen />
    }
*/
        
    // Attempt to SignIn Locally
    useEffect(() => {
        // Checks for a JWT on Async Storage to validate User
        attemptLocalSignIn();
    }, []); 
    

    // If we're waiting to check state, show a Splash screen
    if (state.isLoading) {
        return <SplashScreen />
    }


    // Load the Navigation Container, navigationRef lets us use navigate from outside of React Components (ex/ from a context function)
    return (
        <NavigationContainer ref={navigationRef}>   

            { state.token === null ? // Check our state to see if we're Authenticated
                ( // If Not, Load the Authentication Navigation
                    <AuthStackNavigator />
                ) : 
                    
                ( // If So, Load the Main App Navigation
                    <MainDrawerNavigator />
                )
            }
        </NavigationContainer>
    );
};

// Export the App for Rendering!
export default () => {


    // Wrap the Application in necessary Providers before Rendering
    return (
        <AuthProvider>
            <ExerciseProvider>
                <PaperProvider theme={DefaultTheme} settings={{icon: props => <Ionicons {...props} size={24}/>,}}>
                    <App />
                </PaperProvider>
            </ExerciseProvider>
        </AuthProvider>
        
    );
};