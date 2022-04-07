import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ExerciseForm from '../../Components/ExerciseForm';

import { Context as ExerciseContext } from '../Contexts/ExerciseContext';

const ExerciseCreateScreen= () => {

    const { addExercise } = useContext(ExerciseContext);
    
    return ( 
        <View style={styles.screen}>
            <ExerciseForm  onSubmit={(name, exerciseType, equipment, muscles, force) => {
                addExercise();
            }}/>
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