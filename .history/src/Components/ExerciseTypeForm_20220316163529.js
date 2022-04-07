/**
 *  Author:   Calvin May
 *  
 *  Date:     03/16/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseTypeForm.js
 *  Description: ...
 */

// Imports | React +
import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
// Imports | Components 

// Imports | Data Contexts


// Create the ExerciseTypeForm Component - Deconstruct required props
const ExerciseTypeForm = ({exerciseType, onSubmit}) => {
    
    // Render this on the Screen
    return ( 
        <>
            <Button buttonStyle={{ paddingLeft: 0 }}
                    icon={ exerciseType === 'Strength' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Strength' 
                    type='clear' 
                    onPress={()=> onSubmit('Strength')}
                />
                <Button 
                    icon={ exerciseType === 'Timed' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Timed' 
                    type='clear' 
                    onPress={()=> onSubmit('Timed')}
                />
                <Button 
                    icon={ exerciseType === 'Cardio' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cardio' 
                    type='clear' 
                    onPress={()=> onSubmit('Cardio')}
                />
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the ExerciseTypeForm for use in other files
export default ExerciseTypeForm;