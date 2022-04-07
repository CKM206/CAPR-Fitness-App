import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const SignInScreen= ({ navigation }) => {
    return ( 
        <View>
            <Text>I am the SignInScreen</Text>
            <Button title='Sign Up!' onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default SignInScreen;