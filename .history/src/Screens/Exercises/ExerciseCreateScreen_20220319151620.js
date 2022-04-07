import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import ExerciseForm from '../../Components/ExerciseForm';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise } from '../../redux/features/exercises/exercisesSlice';
//import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';

const ExerciseCreateScreen= ({ navigation }) => {

    //const { addExercise } = useContext(ExerciseContext);
    const dispatch = useDispatch();
    
    return ( 
        <View style={styles.screen}>
            <ExerciseForm  onSubmit={(state) => {
                const exercise = dispatch(addExercise(state));
                console.log(exercise);
                navigation.goBack();
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