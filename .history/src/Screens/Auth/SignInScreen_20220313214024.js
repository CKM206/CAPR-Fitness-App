import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const SignInScreen= ({ navigation }) => {
    return ( 
        <View>
            <Text>I am the SignInScreen</Text>
            <Button title='Go To Main App' onPress={navigation.navigate('Home')} />
            <Button title='Go To Main App' onPress={navigation.navigate('Signup')} />
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default SignInScreen;