/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutHeader.js
 *  Description: ...
 */

// Imports | React +
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { TextInput } from 'react-native-paper';
// Imports | Components 

// Imports | Data Contexts


// Create the WorkoutHeader Component - Deconstruct required props
const WorkoutHeader = ({ titleInitial, noteInitial, onBlur }) => {

    const { title, setTitle } = useState(titleInitial);
    const {note, setNote } = useState(noteInitial)
    console.log(title);

    // Render this on the Screen
    return ( 
        <View>
            <TextInput 
                value={title} 
                mode='flat' 
                placeholder='Title...'  
                onChangeText={setTitle}
                onBlur={onBlur(title)}
            />           
            <TextInput 
                value={note}
                mode='flat' 
                placeholder='Note...'  
                onChangeText={setNote}
                onBlur={onBlur(note)}  
            />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutHeader for use in other files
export default WorkoutHeader;