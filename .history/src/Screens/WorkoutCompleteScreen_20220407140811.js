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
    
    console.log("SET", completedSets)
    // New Array to hold Nested Objects
    let exercises = [];

    // Loop Through Each Exercise
    workoutExercises.forEach((exercise) => {

        // Get all Sets for this Exercise
        let newSets = completedSets.filter((set) => {
            return exercise.sets.includes(set._id);
        })

        newSets = newSets.map((set) => {

            console.log('SET', set)
            if (set.hasOwnProperty('distance')){
                console.log('DISTANCE');
                const [ hours, minutes, seconds ] = set.duration.split(':');

                return ({
                    distance: set.distance,
                    duration: { hours, minutes, seconds },
                    restTime: set.restTime,
                })
            }
            else
            if (set.hasOwnProperty('reps')){
                console.log('REPS');
                return ({
                    reps: set.reps,
                    weight: set.weight,
                    restTime: set.restTime,
                })
            } 
            else
            if (set.hasOwnProperty('weight')){
                console.log('TIMED');
                const [ hours, minutes, seconds ] = set.duration.split(':');
                return ({
                    weight: set.weight,
                    duration: { hours, minutes, seconds },
                    restTime: set.restTime,
                })
            }
            
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
            <Text style={{ flex: 1, fontSize: 24, alignSelf: 'center' }}>You've Done it!</Text>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutCompleteScreen for use in other files
export default WorkoutCompleteScreen;