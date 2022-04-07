import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import ExerciseForm from '../../Components/ExerciseForm';

const ExerciseCreateScreen= () => {
    
    return ( 
        
        <ExerciseForm />
            
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    },
});

export default ExerciseCreateScreen;