/**
 *  Author:   Calvin May
 *  
 *  Date:     03/15/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseListScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View,  } from 'react-native';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts
import { Context as ExerciseContext } from '../../Contexts/exerciseContext';

// Create the ExerciseListScreen Component - Deconstruct required props
const ExerciseListScreen = (props) => {
    
    const { state, getExercises } = useContext(exerciseContext);
    // Render this on the Screen
    return ( 
        <View>
            <Text>I am the ExerciseListScreen</Text>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the ExerciseListScreen for use in other files
export default ExerciseListScreen;