/**
 *  Author:   Calvin May
 *  
 *  Date:     04/07/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutCompleteScreen.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts
import { useDispatch, useSelector } from 'react-redux';
import { saveWorkout } from '../redux/features/workout/workoutSlice';

// Create the WorkoutCompleteScreen Component - Deconstruct required props
const WorkoutCompleteScreen = ({navigation, route}) => { 
    const { activeWorkout, workoutExercises, completedSets } = route.params
    const dispatch = useDispatch();
    
    // New Array to hold Nested Objects
    let exercises = [];

    // Loop Through Each Exercise
    workoutExercises.forEach((exercise) => {

        // Get all Sets for this Exercise
        let newSets = completedSets.filter((set) => {
            return exercise.sets.includes(set._id);
        })

        newSets = newSets.map((set) => {
            return ({
                reps: parseInt(set.reps),
                weight: parseInt(set.weight),
                restTime: set.restTimer,
            })
        })

        // Push onto the New Array
        exercises.push(
            {
                exercise: exercise.exercise_id,
                sets: newSets
            })
        
    });

    console.log('New Array: ', exercises);

    //const dispatch = useDispatch();

    dispatch(saveWorkout({workoutInformation: activeWorkout, exercises: exercises}))
    return ( 
        <View>
            <Text>You've Done it!</Text>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutCompleteScreen for use in other files
export default WorkoutCompleteScreen;