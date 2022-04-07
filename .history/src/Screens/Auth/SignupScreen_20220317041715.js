/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: SignupScreen.js
 *  Description: Provides the Screen Interface that allows the User to Sign up for an account! 
 *              Successful logins route the User to the Apps Main Navigation
 */

// Imports | React +
import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

// Imports | Components & Screens
import AuthForm from '../../Components/AuthForm'
import NavLink from '../../Components/NavLink';

// Imports | Data Contexts
import { Context } from '../../Contexts/AuthContext';


// Create the SignupScreen Component - Deconstruct the necessary Props
const SignupScreen= ({ navigation }) => {
    // Manage Authentication state
    const { state, signup, clearErrorMessage } = useContext(Context);


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
            <AuthForm 
                headerText='Sign Up' 
                errorMessage={ state.errorMessage }
                onSubmit={signup}
                buttonTitle='Sign In'
            />
            <NavLink 
                linkText={`Don't have an Account?\nSignup here!`}
                routeName='SignIn'
            />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    container: {
        flex: 1,                    // Use all available vertical space
        justifyContent: 'center',   // Vertical center
        marginBottom: 50,           // Fine Tune Center Alignment
        marginHorizontal: 15,
    },
});


// Export the SignupScreen Component for use in other files
export default SignupScreen;