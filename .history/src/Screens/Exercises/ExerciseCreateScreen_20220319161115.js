import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import ExerciseForm from '../../Components/ExerciseForm';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise } from '../../redux/features/exercises/exercisesSlice';
//import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';

const ExerciseCreateScreen= ({ navigation }) => {
    const exercises = useSelector(selectExercises);
    const dispatch = useDispatch();
    const exerciseStatus = useSelector(state => state.exercises.status);


    useEffect(() => {
        console.log('Im in Use Effect')

    },[exercises]);

    console.log(`CreateScreen: State=  ${exerciseStatus}`);
    return ( 
        <View style={styles.screen}>
            <ExerciseForm  onSubmit={(state) => {
                dispatch(addExercise(state));
                console.log(`CreateScreen: State=  ${exerciseStatus}`);
                //navigation.goBack();
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