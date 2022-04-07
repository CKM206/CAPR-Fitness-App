/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: AuthForm.js
 *  Description: Provides the Authentication Form used in SignIn and Signup
 */

// Imports | React +
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

// Imports | 3rd Party
import { Text, Button, TextInput } from 'react-native-paper';

// Imports | Components
import Spacer from './Spacer';


// Create the AuthForm Component - Deconstruct the necessary Props
const AuthForm = ({ headerText, errorMessage, buttonTitle, onSubmit }) => {

    // State Handling
    const [email, setEmail] = useState('');         // Handle Email Inputs
    const [password, setPassword] = useState('');   // Handle Password Inputs

    
    // Render this on the Screen
    return (
        <>
            <Spacer> 
                <Text h3 style={{alignSelf: 'center'}}>
                {headerText}
                </Text>
            </Spacer>
            <TextInput 
                label="Email" value={email} onChangeText={setEmail} 
                autoCapitalize='none'
                autoCorrect={false}
            />    
            <TextInput 
                label="Password" value={password} onChangeText={setPassword} 
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                
            />
            { errorMessage ? // This is a Ternary, Renders an Error if there is one
                <Text style={styles.errorMessage}>
                    { errorMessage }
                </Text> : null        
            }
            <Spacer> 
                <Button title={buttonTitle} onPress={() => onSubmit({ email, password })} />
            </Spacer> 
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 13,
        //marginTop: 5,
    },
});

// Export the AuthForm Component for use in other files
export default AuthForm;