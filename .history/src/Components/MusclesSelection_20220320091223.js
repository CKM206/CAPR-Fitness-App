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
const MusclesSelection = ({selectedMuscles, onSelect}) => {

    //const { allDisabled, exerciseType, selectedMuscles } = initialValues
    
    // Render this on the Screen
    return ( 
        <View style={styles.rows}>
            <Chip 
                icon={ selectedMuscles.includes('Chest') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Chest')}
                onPress={()=> onSelect('Chest')}
            >  Chest
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Back') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Back')}
            >  Back
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Shoulders') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Shoulders')}
            >  Shoulders
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Legs') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Legs')}
            >  Legs
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Arms') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Arms')}
            >  Arms
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Core') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Core')}
            >  Core
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Full body') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Full body')}
            >  Full body
            </Chip>
            <Chip 
                icon={ selectedMuscles.includes('Cardio') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                onPress={()=> onSelect('Cardio')}
            >  Cardio
            </Chip>
        </View>
    );
};

MusclesSelection.defaultProps = {

    initialValues: {
        allDisabled: false,
        exerciseType: '',
        selectedMuscles: []
    }
};

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