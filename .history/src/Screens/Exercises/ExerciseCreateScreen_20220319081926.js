import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import ExerciseForm from '../../Components/ExerciseForm';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise } from '../../redux/features/exercises/exercisesSlice';
//import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';

const ExerciseCreateScreen= () => {

    //const { addExercise } = useContext(ExerciseContext);
    
    return ( 
        <View style={styles.screen}>
            <ExerciseForm  onSubmit={(name, exerciseType, muscles, force, equipment) => {
                dispatch(addExercise(name, exerciseType, muscles, force, equipment));
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