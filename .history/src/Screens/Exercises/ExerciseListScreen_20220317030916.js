/**
 *  Author:   Calvin May
 *  
 *  Date:     03/15/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseListScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

// Imports | 3rd Party
import { Snackbar } from 'react-native-paper';

// Imports | Components 

// Imports | Data Contexts
import { Context as ExerciseContext } from '../../Contexts/ExerciseContext';

// Create the ExerciseListScreen Component - Deconstruct required props
const ExerciseListScreen = ({ navigation, route }) => {
    // State Management for Exercises
    const { state, getExercises } = useContext(ExerciseContext);
    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);

    console.log(route.params.name);
    useEffect (() => {
        getExercises();
        // if (route.params.hasH != null)
        // {
        //     setVisible(true);
        // }
        
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
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                    label: 'Close',
                    }}>
                    `Added`
                </Snackbar>
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