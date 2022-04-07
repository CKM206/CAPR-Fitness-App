/**
 *  Author:   Calvin May
 *  
 *  Date:     03/15/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseListScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useLayoutEffect } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

// Imports | 3rd Party
import { useSelector, useDispatch } from 'react-redux';

// Imports | Components 

// Imports | Data Contexts
//import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';
import { selectAllExercises, selectExerciseById, selectExerciseIds, fetchExercises } from '../../redux/features/exercises/exercisesSlice';

// const exerciseExcerpt = ({ exerciseId }) => {
//     const exercise = useSelector(state => selectExerciseById(state, exerciseId));
// }

// Create the ExerciseListScreen Component - Deconstruct required props
const ExerciseListScreen = ({ navigation, route }) => {
    // State Management for Exercises
    //const { state, getExercises } = useContext(ExerciseContext);
    const ordereredExercises = useSelector(selectAllExercises);
    const dispatch = useDispatch();
    const exerciseStatus = useSelector(state => state.exercises.status);
    
    console.log(ordereredExercises);

    useLayoutEffect (() => {

        console.log(`ExerciseScreen: State=  ${exerciseStatus}`);
        if (exerciseStatus === 'idle')
        {
            console.log('I got Inside the If Check')
            console.log('rendering'); 
            dispatch(fetchExercises());
        }

    }, [exerciseStatus, dispatch]);

    //console.log(exercises);
    // Render this on the Screen
    return ( 
        <View>
            <FlatList
                data={ordereredExercises}
                keyExtractor={(exercise) => exercise._id}
                renderItem={({ item }) => {
                    console.log(`Exercise: ${item.name}, ID: ${item._id}`);
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('ExercisesStack', {screen: 'ExerciseDetail', params: {_id: item._id} })}} > 
                            <View style={ styles.row }>
                                <Text style={ styles.title }>{item.name} - {item.primaryMuscleGroup}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderTopWidth: 1,
        
        
    },
    title: {
        fontSize: 18,
    },
});

// Export the ExerciseListScreen for use in other files
export default ExerciseListScreen;