/**
 *  Author:   Calvin May
 *  
 *  Date:     04/03/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExerciseMenu.js
 *  Description: ...
 */

// Imports | React +
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { IconButton, Menu, Divider } from 'react-native-paper';
// Imports | Components 

// Imports | Data Contexts



// Create the WorkoutExerciseMenu Component - Deconstruct required props
const WorkoutExerciseMenu = (props) => {
    const [visible, setVisible] = useState(false);

    const openMenu = setVisible(true);
    //const closeMenu = setVisible(false);

    // Render this on the Screen
    return ( 
        <>
            <Text> Hello</Text>
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutExerciseMenu for use in other files
export default WorkoutExerciseMenu;