/**
 *  Author:   Calvin May
 *  
 *  Date:     03/15/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseListScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

// Imports | 3rd Party
import { useSelector, useDispatch } from 'react-redux';
// Imports | Components 

// Imports | Data Contexts
//import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';
import { getExercises, selectExercises } from '../../redux/features/exercises/exercisesSlice';

// Create the ExerciseListScreen Component - Deconstruct required props
const ExerciseListScreen = ({ navigation, route }) => {
    // State Management for Exercises
    //const { state, getExercises } = useContext(ExerciseContext);
    const exercises = useSelector(selectExercises);
    const dispatch = useDispatch();
    

    useEffect (() => {
        getExercises();
        
        const showExercises = navigation.addListener('focus', () => {
            getExercises();
        });
        
        return showExercises;
    }, []);

    console.log(exercises.exercises);
    // Render this on the Screen
    return ( 
        <View>
            <FlatList
                data={exercises}
                keyExtractor={(exercise) => exercise._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('ExerciseDetail', {_id: item._id})}} > 
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