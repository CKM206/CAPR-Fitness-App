/**
 *  Author:   Calvin May
 *  
 *  Date:     04/05/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: SetInput.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Caption, TextInput, IconButton } from 'react-native-paper';

// Imports | Components 

// Imports | Data Contexts
import { useSelector, useDispatch } from 'react-redux';
import { update_set } from '../redux/features/workout/workoutSetsSlice';

// Create the SetInput Component - Deconstruct required props
const SetInput = ({ setId }) => {
    
    // Render this on the Screen
    return ( 
        <View style={{backgroundColor: 'white'}}>

                <TextInput style={styles.metricsInput} maxLength={4} caretHidden keyboardType='numeric' placeholder='----' mode='outlined' dense/>
                <TextInput style={styles.metricsInput} maxLength={4} caretHidden keyboardType='numeric' placeholder='----' mode='outlined' dense/>
                <IconButton icon='square-outline' size={20} onPress={() => {}}/>

            
        </View> 
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