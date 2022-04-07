/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: SignInScreen.js
 *  Description: Provides the Screen Interface that allows the User to Sign in to the App! 
 *              Successful logins route the User to the Apps Main Navigation
 */

// Imports | React +
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

// Imports | Components
import AuthForm from '../../Components/AuthForm'
import NavLink from '../../Components/NavLink';

// Imports | Data Contexts
import { Context } from '../../Contexts/AuthContext';


// Create the SignupScreen Component, deconstruct needed props
const SignInScreen= ({ navigation }) => {
    const { state, signIn, clearErrorMessage } = useContext(Context);

    // Every time we Navigate away from this page clear Errors
    useEffect(() => {
        const clearErrors = navigation.addListener('blur', () => {
            clearErrorMessage();
        });
        // Return to unMount this listener 
        return clearErrors;
    }, [navigation]); // Runs whenever the navigation Prop changes

    // Render this on the Screen
    return ( 
        <View style={styles.container}>
            <AuthForm headerText='Sign In to Your Account' 
                      errorMessage={ state.errorMessage }
                      onSubmit={signIn}
                      buttonTitle='Sign In'
            />
            <NavLink linkText={`Don't have an Account?\nSignup here!`}
                     routeName='Signup'
            />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    container: {
        flex: 1,                    // Use all available vertical space
        //borderWidth: 1,           // Border for Testing
        //borderColor: 'red',       // Border for Testing
        justifyContent: 'center',   // Vertical center
        marginBottom: 50,           // Fine Tune Center Alignment
        marginHorizontal: 15,
    },
});

// Export the SignupScreen Component for use in other files
export default SignInScreen;