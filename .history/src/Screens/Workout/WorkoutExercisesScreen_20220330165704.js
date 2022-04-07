/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExercisesScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { FAB, Divider } from 'react-native-paper';

// Imports | 3rd Party
import { Avatar } from 'react-native-paper';

// Imports | Components 

// Imports | Redux
import { useSelector, useDispatch } from 'react-redux';
import { addExercises } from '../../redux/features/workout/workoutExercisesSlice';
import { selectAllExercises, fetchExercises } from '../../redux/features/exercises/exercisesSlice';


// Create the WorkoutExercisesScreen Component - Deconstruct required props


const WorkoutExercisesScreen = ({navigation}) => {

// State Management for Exercises
const allExercises = useSelector(selectAllExercises);
const [chosenExercises, setChosenExercises] = useState([]);
const dispatch = useDispatch();
const exerciseStatus = useSelector(state => state.exercises.status);


useLayoutEffect (() => {

    //console.log('Rendering Again')
    if (exerciseStatus === 'idle')
    {
        //console.log('Fetching Exercises'); 
        dispatch(fetchExercises());
    }

}, [exerciseStatus, navigation]);

const addExercise = (exercise) => {
    // Get Exercise Data
    const { _id, name, exerciseType, muscles, force} = exercise;

    // Create a new Chosen Exercises Array
    const updatedExercises = [...chosenExercises];

    // Push the new Exercise onto the array
    updatedExercises.push({ exercise_id: _id });

    // Set the new State
    setChosenExercises(updatedExercises);

    // Log it
    //console.log(chosenExercises);

};

//console.log(chosenExercises);
const removeExercise = (item) => {

    //console.log(`TRYING TO DELETE ${item}`)
    // Create copy of muscles array
    let updatedExercises = [...chosenExercises];
    
    // Remove the element at the elements index
    const indexToRemove = updatedExercises.indexOf(item[0]);

    updatedExercises.splice(indexToRemove, 1);
    //console.log('NEW ARRAY');
    //console.log(updatedExercises);
    // Return the new Stat
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
                        const chosenExercise = chosenExercises.filter((exercise) => exercise.exercise_id === item._id);
                        //console.log(chosenExercise);
                        chosenExercise.length > 0
                        ? removeExercise(chosenExercise)
                        : addExercise(item);                       
                    }} > 
                        <View style={ styles.row }>
                            <Text style={ styles.title }>{item.name} - {item.primaryMuscleGroup}</Text>
                            {chosenExercises.filter((exercise) => exercise.exercise_id === item._id).length > 0
                            ? <Avatar.Icon style={{ alignSelf: 'center' }} size={24} icon='checkmark-outline' color='green' backgroundColor='white' />
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
                dispatch(addExercises(chosenExercises))
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
        //borderTopWidth: 1,  
        overflow: 'hidden',
        alignItems: 'flex-end'
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