import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SignoutButton = ({title, onSubmit}) => {
    return ( 
        <Button title={title} onPress={() => onSubmit()} />
    );
};


const styles = StyleSheet.create({
    
});

export default SignoutButton;