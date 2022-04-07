import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';


const AuthForm = ({ headerText, errorMessage, buttonTitle, onSubmit }) => {

    // State Handling
    const [email, setEmail] = useState('');         //Handle Email Inputs
    const [password, setPassword] = useState('');   // Handle Password Inputs

    //console.log(`AuthForm Component: ${email}`);

    return (
        <>
            <Spacer> 
                    <Text h3 style={{alignSelf: 'center'}}>
                        {headerText}
                    </Text>
            </Spacer>
            <Input 
                label="Email" value={email} onChangeText={setEmail} 
                autoCapitalize='none'
                autoCorrect={false}
            />
            
            <Input 
                label="Password" value={password} onChangeText={setPassword} 
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                
            />

            { errorMessage ? // This is a Ternary, 
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text> : null        
            }
            <Spacer> 
            <Button title={buttonTitle} onPress={() => onSubmit({ email, password })} />
            </Spacer> 
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 13,
        //marginTop: 5,
    },
});

export default AuthForm;