import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ExerciseForm from '../../Components/ExerciseForm';

const ExerciseCreateScreen= () => {
    
    return ( 
        <View style={styles.screen}>
            <ExerciseForm />
        </View>    
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
    },
    
});

export default ExerciseCreateScreen;