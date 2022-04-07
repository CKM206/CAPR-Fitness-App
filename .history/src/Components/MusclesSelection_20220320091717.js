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
import { Chip } from 'react-native-paper';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts


// Create the MusclesSelection Component - Deconstruct required props
const MusclesSelection = ({selectedMuscles, onSelect}) => {

    //const { allDisabled, exerciseType, selectedMuscles } = initialValues
    
    // Render this on the Screen
    return ( 
        <>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Chest') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Chest')}
                onPress={()=> onSelect('Chest')}
            >  Chest
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Back') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Back')}
                onPress={()=> onSelect('Back')}
            >  Back
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Shoulders') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Shoulders')}
                onPress={()=> onSelect('Shoulders')}
            >  Shoulders
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Legs') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Legs')}
                onPress={()=> onSelect('Legs')}
            >  Legs
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Arms') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Arms')}
                onPress={()=> onSelect('Arms')}
            >  Arms
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Core') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Core')}
                onPress={()=> onSelect('Core')}
            >  Core
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Full body') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Full body')}
                onPress={()=> onSelect('Full body')}
            >  Full body
            </Chip>
            <Chip style={styles.chip}
                icon={ selectedMuscles.includes('Cardio') ? 'checkmark-circle' : 'add-circle-outline'} 
                mode='outlined'
                selected={selectedMuscles.includes('Cardio')}
                onPress={()=> onSelect('Cardio')}
            >  Cardio
            </Chip>
        </>
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
    chip: {
        margin: 5,
        selectedColor: 'purple'
        
    },
});

// Export the MusclesSelection for use in other files
export default MusclesSelection;