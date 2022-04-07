/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: EquipmentSelection.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Chip } from 'react-native-paper';

// Imports | Components 

// Imports | Data Contexts


// Create the EquipmentSelection Component - Deconstruct required props
const EquipmentSelection = ({ onSelect, equipment, exerciseType }) => {
    
    // Render this on the Screen
    return ( 
        <>
            <Chip style={styles.chip}
            icon={ equipment === 'Barbell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Barbell'}
                onPress={()=> onSelect('Barbell')}
            >   Barbell
            </Chip>    
            <Chip style={styles.chip}
            icon={ equipment === 'Dumbbell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Dumbbell'}
                onPress={()=> onSelect('Dumbbell')}
            >   Dumbbell
            </Chip>
            <Chip style={styles.chip}
            icon={ equipment === 'Kettlebell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Kettlebell'}
                onPress={()=> onSelect('Kettlebell')}
            >   Kettlebell
            </Chip>
            <Chip style={styles.chip}
            icon={ equipment === 'Cable Machine' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Cable Machine'}
                onPress={()=> onSelect('Cable Machine')}
            >   Cable Machine
            </Chip>
            <Chip style={styles.chip}
            icon={ equipment === 'Machine' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Machine'}
                onPress={()=> onSelect('Machine')}
            >   Machine
            </Chip>
            <Chip style={styles.chip}
            icon={ equipment === 'Bodyweight' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Bodyweight'}
                onPress={()=> onSelect('Bodyweight')}
            >   Bodyweight
            </Chip>
            <Chip style={styles.chip}
            icon={ equipment === 'Other' || exerciseType === 'Cardio' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType }
                mode='outlined'
                selected={equipment === 'Other' || exerciseType === 'Cardio'}
                onPress={()=> onSelect('Other')}
            >   Other
            </Chip>   
        </>
    );
};

EquipmentSelection.defaultProps = {
    exerciseType: '',
    equipment: '',
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    chip: {
        margin: 5,
        
    },
});

// Export the EquipmentSelection for use in other files
export default EquipmentSelection;