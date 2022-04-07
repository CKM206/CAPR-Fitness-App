import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ExerciseForm from '../../Components/ExerciseForm';

const ExerciseCreateScreen= () => {
    
    return ( 
        <View style='screen'>
            <ExerciseForm />
        </View>    
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