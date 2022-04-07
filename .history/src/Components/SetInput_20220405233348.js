/**
 *  Author:   Calvin May
 *  
 *  Date:     04/05/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: SetInput.js
 *  Description: ...
 */

// Imports | React +
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Caption, TextInput, IconButton } from 'react-native-paper';

// Imports | Components 

// Imports | Data Contexts
import { useSelector, useDispatch } from 'react-redux';
import { update_set } from '../redux/features/workout/workoutSetsSlice';

// Create the SetInput Component - Deconstruct required props
const SetInput = ({ setId }) => {

    const [reps, setReps] = useState('-');
    const [weight, setWeight] = useState('-');
    const [isComplete, setIsComplete] = useState(false);


    // Render this on the Screen
    return ( 
        <>
            <TextInput 
                style={styles.metricsInput} 
                maxLength={4} 
                caretHidden 
                keyboardType='numeric' 
                mode='outlined' dense
                onChangeText={(text) => setWeight(text)}
                value={weight}
            />
            <TextInput 
                style={styles.metricsInput} 
                maxLength={4} 
                caretHidden 
                keyboardType='numeric' 
                mode='outlined' dense
                onChangeText={(text) => setReps(text)}
                value={reps}
            />
            <IconButton icon={isComplete ? 'square-outline' : 'checkbox'}  size={20} onPress={() => {setIsComplete(!isComplete)}}/>       
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    setInputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
          
    },
    metricsInput: {
        minWidth: 65,
        backgroundColor: 'transparent',
    }
});

// Export the SetInput for use in other files
export default SetInput;