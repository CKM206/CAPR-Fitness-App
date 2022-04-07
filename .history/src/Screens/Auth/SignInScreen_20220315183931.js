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

// Imports | Components
import AuthForm from '../../Components/AuthForm'
import NavLink from '../../Components/NavLink';

// Imports | Data Contexts
import { Context } from '../../Contexts/authContext';


// Create the SignupScreen Component, deconstruct needed props
const SignInScreen= ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);


    useEffect(() => {

        const clearErrors = navigation.addListener('blur', () => {
            clearErrorMessage();
        });

        return clearErrors;
    }, [navigation]);

    return ( 
        <View style={styles.container}>
            <AuthForm headerText='Sign In to Your Account' 
                      errorMessage={ state.errorMessage }
                      onSubmit={signin}
                      buttonTitle='Sign In'
            />
            <NavLink linkText={`Don't have an Account?\nSignup here!`}
                     routeName='Signup'
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,                    // Use all available vertical space
        //borderWidth: 1,           // Border for Testing
        //borderColor: 'red',       // Border for Testing
        justifyContent: 'center',   // Vertical center
        marginBottom: 50,           // Fine Tune Center Alignment
    },
});

export default SignInScreen;