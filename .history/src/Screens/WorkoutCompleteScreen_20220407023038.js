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


// Create the WorkoutCompleteScreen Component - Deconstruct required props
const WorkoutCompleteScreen = ({navigation, route}) => {
    
    const { activeWorkout, workoutExercises, completedSets } = route.params
    // const completedSets = route.params.completedSets
    // const activeWorkout = route.params.activeWorkout
    // const workoutExercises = route.params.workoutExercises

    console.log('\n\nCompleted Sets: ', completedSets);
    console.log('\n\nActive Workout: ', activeWorkout);
    console.log('Workout Exercises: ', workoutExercises);

    //console.log(route.params);
    // Render this on the Screen
    return ( 
        <View>
            <Text>I am the Workout Complete Screen</Text>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutCompleteScreen for use in other files
export default WorkoutCompleteScreen;