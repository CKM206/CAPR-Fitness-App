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
        <>
            <View style={styles.setInputContainer}>
                <Caption>Weight</Caption>
                <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' placeholder='-' dense/>
                <Caption>Reps</Caption> 
                <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric'  placeholder='-' dense/>

            </View>

            {/* <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' placeholder='-' dense/> */}
            <IconButton icon='square-outline' onPress={() => {}}/>
            
        </> 
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    setInputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //width: '100%',
        alignItems: 'center',
        paddingBottom: 5,
        //borderWidth: 1,  
          
    },
});

// Export the SetInput for use in other files
export default SetInput;