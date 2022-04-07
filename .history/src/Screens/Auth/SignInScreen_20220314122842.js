import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationEvents } from '@react-navigation/native';    // Include Some Navigation events
import AuthForm from '../../Components/AuthForm'
import NavLink from '../../Components/NavLink';
import { Context } from '../../Contexts/authContext';

const SignInScreen= ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return ( 
        <View style={styles.container}>
            
            <AuthForm headerText='Sign In to Your Account' 
                      errorMessage=''//{ state.errorMessage }
                      //onSubmit={signin}
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