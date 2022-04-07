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
import { update_set, selectSetById } from '../redux/features/workout/workoutSetsSlice';

// Create the SetInput Component - Deconstruct required props
const SetInput = ({ setId }) => {

    // Redux Config
    const dispatch = useDispatch();
    const set = useSelector((state) => selectSetById(state, setId));

    console.log('Set: ', setId);

    // State Management
    const [reps, setReps] = useState(set ? set.reps : '');
    const [weight, setWeight] = useState(set ? set.reps : '');
    const [isComplete, setIsComplete] = useState(set ? set.isComplete : false);
    

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
                onBlur={() => dispatch(update_set({_id: setId, changes: { weight }}))}
                value={weight}
            />
            <TextInput 
                style={styles.metricsInput} 
                maxLength={4} 
                caretHidden 
                keyboardType='numeric' 
                mode='outlined' dense
                onChangeText={(text) => setReps(text)}
                onBlur={() => {dispatch(update_set({_id: setId, changes: { reps }}))}}
                value={reps}
            />
            <IconButton icon={isComplete ? 'checkbox' : 'square-outline'}  size={20} onPress={() => dispatch(update_set({_id: setId, changes: { isComplete: !isComplete}}))} />       
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