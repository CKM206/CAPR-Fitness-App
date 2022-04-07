import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import AuthForm from '../../Components/AuthForm'
import NavLink from '../../Components/NavLink';
import { Context } from '../../Contexts/authContext';

const SignupScreen= ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(Context);


    useEffect(() => {

        const clearErrors = navigation.addListener('blur', () => {
            clearErrorMessage();
        });

        return clearErrors;
    }, [navigation]);

    return ( 
        <View style={styles.container}>
            <AuthForm headerText='Sign Up' 
                      errorMessage={ state.errorMessage }
                      onSubmit={signup}
                      buttonTitle='Sign In'
            />
            <NavLink linkText={`Don't have an Account?\nSignup here!`}
                     routeName='SignIn'
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

export default SignupScreen;