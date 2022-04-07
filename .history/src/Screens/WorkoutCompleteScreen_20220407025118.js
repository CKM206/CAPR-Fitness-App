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
import { save_workout } from '../redux/features/workout/workoutSlice';

// Create the WorkoutCompleteScreen Component - Deconstruct required props
const WorkoutCompleteScreen = ({navigation, route}) => { 
    const { activeWorkout, workoutExercises, completedSets } = route.params

    const exercises = [];

    workoutExercises.forEach((exercise) => {
        
        exercises.push(
            {
                exercise: exercise.exercise_id,
                sets: completedSets.filter(set => {
                    exercise.sets.includes(set._id)
                })
            }
        )
    });

    console.log('New Array: ', exercises);

    //const dispatch = useDispatch();

    //dispatch(save_workout())
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