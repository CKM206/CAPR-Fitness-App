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

// Imports | Data Contexts
import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';

// Create the WorkoutExercisesScreen Component - Deconstruct required props


const WorkoutExercisesScreen = ({navigation}) => {

// State Management for Exercises
const { state, getExercises } = useContext(ExerciseContext);
const [chosenExercises, setChosenExercises] = useState([]);

const addExercise = (exercise) => {
    const { _id, name, exerciseType, muscles, force} = exercise;

    const updatedExercises = [...chosenExercises];

    updatedExercises.push({_id, name, exerciseType, muscles, force});

    setChosenExercises(updatedExercises);

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


useEffect (() => {
    getExercises();
    
    const showExercises = navigation.addListener('focus', () => {
        getExercises();
    });
    
    return showExercises;
}, []);
// Render this on the Screen
return ( 
    <View>
        <FlatList
            data={state}
            keyExtractor={(exercise) => exercise._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { 
                        const exercise = chosenExercises.filter((exercise) => exercise._id === item._id)
                        exercise.length > 0
                        ? removeExercise(exercise._id)
                        : addExercise(item)                       
                    }} > 
                        <View style={ styles.row }>
                            <Text style={ styles.title }>{item.name} - {item.primaryMuscleGroup}</Text>
                            {chosenExercises.filter((exercise) => exercise._id === item._id).length > 0
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
            onPress={() => {navigation.navigate('WorkoutStack', { screen:'WorkoutDetail', params: {exercises: chosenExercises}})}}
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