/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutHeader.js
 *  Description: ...
 */

// Imports | React +
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { TextInput } from 'react-native-paper';
// Imports | Components 

// Imports | Data Contexts
import { Context as WorkoutContext } from '../Contexts/ExerciseContext'

// Create the WorkoutHeader Component - Deconstruct required props
const WorkoutHeader = ({ }) => {

    const { state, changeTitle, changeNote } = useContext(WorkoutContext);

    console.log(state);
    // Render this on the Screen
    return ( 
        <View>
            <TextInput 
                value={state.title} 
                mode='flat' 
                placeholder='Title...'  
                onChangeText={changeTitle}
            />           
            <TextInput 
                value={state.note}
                mode='flat' 
                placeholder='Note...'  
                onChangeText={changeNote}
            />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutHeader for use in other files
export default WorkoutHeader;