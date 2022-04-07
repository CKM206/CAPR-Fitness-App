import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationEvents } from '@react-navigation/native';    // Include Some Navigation events
import AuthForm from '../../Components/AuthForm'
import NavLink from '../../Components/NavLink';
import { Context } from '../../contexts/AuthContext';

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