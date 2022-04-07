/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExercisesScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';

// Imports | 3rd Party

// Imports | Components 

// Imports | Redux
import { useSelector, useDispatch } from 'react-redux';
import { add_exercises, selectExerciseIds } from '../../redux/features/workout/workoutExercisesSlice';
import { selectAllExercises } from '../../redux/features/exercises/exercisesSlice';


// Create the WorkoutExercisesScreen Component - Deconstruct required props


const WorkoutExercisesScreen = ({navigation}) => {

// State Management for Exercises
const allExercises = useSelector(selectAllExercises);
const [chosenExercises, setChosenExercises] = useState([]);
const currentExercisesNumber = useSelector(selectExerciseIds).length;
const dispatch = useDispatch();

console.log(currentExercisesNumber);
const addExercise = (exercise) => {
    // Get Exercise Data
    const { _id, name, exerciseType, muscles, force} = exercise;

    // Create a new Chosen Exercises Array
    const updatedExercises = [...chosenExercises];

    // Find a new Index for this Exercise in state
    let nextIndex = updatedExercises.length + currentExercisesNumber;

    console.log(nextIndex);

    // Push the new Exercise onto the array
    updatedExercises.push({_id: nextIndex, exercise_id: _id, name, exerciseType, muscles, force});

    // Set the new State
    setChosenExercises(updatedExercises);

    // Log it
    console.log(chosenExercises);

};

console.log(chosenExercises);
const removeExercise = (id) => {

    // Create copy of muscles array
    const updatedExercises = [...chosenExercises];

    // Remove the element at the elements index
    updatedExercises.splice(updatedExercises.indexOf(id), 1);
    // Return the new State
    setChosenExercises(updatedExercises);

};

    useEffect(() => {
        const clearExercises = navigation.addListener('focus', () => {
            setChosenExercises([]);
        });
        // Return to unMount this listener 
        return clearExercises;
    }, [navigation]); // Runs whenever the navigation Prop changes

// Render this on the Screen
return ( 
    <View>
        <FlatList
            data={allExercises}
            keyExtractor={(exercise) => exercise._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { 
                        chosenExercises.filter((exercise) => exercise._id === item.exercise_id).length > 0
                        ? removeExercise(item._id)
                        : addExercise(item)                       
                    }} > 
                        <View style={ styles.row }>
                            <Text style={ styles.title }>{item.name} - {item.primaryMuscleGroup}</Text>
                            {chosenExercises.filter((exercise) => exercise._id === item.exercise_id).length > 0
                            ? <Text>-Added</Text>
                            : null}
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
        <FAB 
            style={styles.fab}
            icon='ios-add'
            disabled={chosenExercises.length > 0 ? false : true}
            onPress={() => {
                dispatch(add_exercises(chosenExercises))
                navigation.goBack()
            }}
        />
    </View>
);
};

WorkoutExercisesScreen.defaultProps = {
    chosenExercises: [],
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
    fab: {
        position: 'absolute',
        margin: 10,
        bottom: 5,
        right: 5,
        fontSize: 2
    }
});

// Export the ExerciseListScreen for use in other files
export default WorkoutExercisesScreen;