import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const SignInScreen= ({ navigation }) => {
    return ( 
        <View>
            <Text>I am the SignInScreen</Text>
            <Button title='Sign Up!' onPress={navigation.navigate('Signup')} />
            <Button title='Go To Main App' onPress={navigation.navigate('Main', { screen: 'Home' })} />
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default SignInScreen;