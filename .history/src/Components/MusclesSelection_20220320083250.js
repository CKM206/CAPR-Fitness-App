/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: MusclesSelection.js
 *  Description: ...
 */

// Imports | React +
import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Chip, Button } from 'react-native-paper';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts


// Create the MusclesSelection Component - Deconstruct required props
const MusclesSelection = ({initialValues, onSelect}) => {

    const [muscles, setMuscles] = useState('');
    
    // Render this on the Screen
    return ( 
        <View style={styles.row}>
            <Chip 
                icon={ muscles.includes('Chest') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='outlined'
                selected
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Chest'})}
            >  Chest
            </Chip>
            <Button 
                icon={ muscles.includes('Back') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Back'})}
            >  Back
            </Button>
            <Button 
                icon={ muscles.includes('Shoulders') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Shoulders'})}
            >  Shoulders
            </Button>
            <Button 
                icon={ muscles.includes('Legs') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Legs'})}
            >  Legs
            </Button>
            <Button 
                icon={ muscles.includes('Arms') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Arms'})}
            >  Arms
            </Button>
            <Button 
                icon={ muscles.includes('Core') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Core'})}
            >  Core
            </Button>
            <Button 
                icon={ muscles.includes('Full body') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                mode='text' compact
                onPress={()=> dispatch({type: 'change_muscles', payload: 'Full body'})}
            >  Full body
            </Button>
            <Button 
                icon={ muscles.includes('Cardio') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        //width: '80%',
        
    },
});

// Export the MusclesSelection for use in other files
export default MusclesSelection;