/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: MusclesSelection.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts


// Create the MusclesSelection Component - Deconstruct required props
const MusclesSelection = ({initialValues, onSelect}) => {
    
    // Render this on the Screen
    return ( 
        <View>
            <Button 
                icon={ state.muscles.includes('Chest') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Chest'})}
            >  Chest
            </Button>
            <Button 
                icon={ state.muscles.includes('Back') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Back'})}
            >  Back
            </Button>
            <Button 
                icon={ state.muscles.includes('Shoulders') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Shoulders'})}
            >  Shoulders
            </Button>
            <Button 
                icon={ state.muscles.includes('Legs') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Legs'})}
            >  Legs
            </Button>
            <Button 
                icon={ state.muscles.includes('Arms') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Arms'})}
            >  Arms
            </Button>
            <Button 
                icon={ state.muscles.includes('Core') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Core'})}
            >  Core
            </Button>
            <Button 
                icon={ state.muscles.includes('Full body') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Full body'})}
            >  Full body
            </Button>
            <Button 
                icon={ state.muscles.includes('Cardio') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Cardio'})}
            >  Cardio
            </Button>
        </View>
    );
};

MusclesSelection.defaultProps = {

    initialValues: {
        allDisabled: false,
        exerciseType: ''
    }
}

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the MusclesSelection for use in other files
export default MusclesSelection;