import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SignupScreen= ({ navigation }) => {
    return ( 
        <View>
            <Text>I am the SignupScreen</Text>
            <Button title='Go To Main App' onPress={navigation.navigate('SignIn')} />
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default SignupScreen;