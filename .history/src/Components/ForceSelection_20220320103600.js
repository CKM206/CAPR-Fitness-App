/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ForceSelection.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Chip } from 'react-native-paper';

// Imports | Components 

// Imports | Data Contexts


// Create the ForceSelection Component - Deconstruct required props
const ForceSelection = ({onSelect, force, exerciseType}) => {
    
    // Render this on the Screen
    return ( 
        <View>
            <Chip style={styles.chip}
                icon={ force === 'Push' ? 'checkmark-circle' : 'add-circle-outline'} 
                disabled={!exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                
                selected={force === 'Push'}
                onPress={()=> onSelect('Push')}
            >  Chest
            </Chip>
            <Chip style={styles.chip}
                icon={ force === 'Pull' ? 'checkmark-circle' : 'add-circle-outline'} 
                disabled={!exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={force === 'Push'}
                onPress={()=> onSelect('Pull')}
            >  Back
            </Chip>
        </View>
    );
};

ForceSelection.defaultProps = {
    exerciseType: '',
    force: '',
};

// Contains Styling for this Component
const styles = StyleSheet.create({
chip: {
    margin: 5,
    
},
});

// Export the ForceSelection for use in other files
export default ForceSelection;