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
            <Chip 
            icon={ equipment === 'Barbell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Barbell'}
                onPress={()=> onSelect('Barbell')}
            >   Barbell
            </Chip>    
            <Chip 
            icon={ equipment === 'Dumbbell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Dumbbell'}
                onPress={()=> onSelect('Dumbbell')}
            >   Dumbbell
            </Chip>
            <Chip 
            icon={ equipment === 'Kettlebell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Kettlebell'}
                onPress={()=> onSelect('Kettlebell')}
            >   Kettlebell
            </Chip>
            <Chip 
            icon={ equipment === 'Cable Machine' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Cable Machine'}
                onPress={()=> onSelect('Cable Machine')}
            >   Cable Machine
            </Chip>
            <Chip 
            icon={ equipment === 'Machine' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Machine'}
                onPress={()=> onSelect('Machine')}
            >   Machine
            </Chip>
            <Chip 
            icon={ equipment === 'Bodyweight' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
            disabled={ !exerciseType || exerciseType === 'Cardio'}
                mode='outlined'
                selected={equipment === 'Bodyweight'}
                onPress={()=> onSelect('Bodyweight')}
            >   Bodyweight
            </Chip>
            <Chip 
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
    
});

// Export the EquipmentSelection for use in other files
export default EquipmentSelection;