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

const AnchorButton = ({onSubmit}) => {
    return (
    <IconButton 
        icon='ellipsis-vertical'
        size={22}
        onPress={onSubmit}
    />
    )
}

// Create the WorkoutExerciseMenu Component - Deconstruct required props
const WorkoutExerciseMenu = (props) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    // Render this on the Screen
    return ( 
        <>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<AnchorButton onSubmit={openMenu} />}
            >
                <Menu.Item onPress={() => {}} title='Option 1'/>
                <Menu.Item onPress={() => {}} title='Option 2'/>
                <Divider />
                <Menu.Item onPress={() => {console.log('Removing Exercise')}} title='Remove Exercise'/>
            </Menu>
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutExerciseMenu for use in other files
export default WorkoutExerciseMenu;