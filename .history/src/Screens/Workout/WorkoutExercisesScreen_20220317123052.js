/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExercisesScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useContext, useEffect, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts
import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';

// Create the WorkoutExercisesScreen Component - Deconstruct required props

const reducer = (state, action) => {

    switch (action.type) {
        case 'select_exercise':
            return state;
        case 'remove_exercise':
            return state;                  
        default:
            return state;
    }
};

const WorkoutExercisesScreen = ({navigation, chosenExercises}) => {

// State Management for Exercises
const { state, getExercises } = useContext(ExerciseContext);

// State Management for Chosen Exercises
const [chosenState, dispatch] = useReducer(reducer, { exercises: []});


    

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
                    <TouchableOpacity onPress={() => {}} > 
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
});

// Export the ExerciseListScreen for use in other files
export default WorkoutExercisesScreen;