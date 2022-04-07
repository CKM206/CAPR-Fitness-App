/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutDetailScreen.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// Imports | 3rd Party
import {Text, Title, Subheading, Caption, TextInput, Checkbox, Button, } from 'react-native-paper';
// Imports | Components 

// Imports | Data Contexts


// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({navigation}) => {
    
    // Render this on the Screen
    return ( 
        <View>
            <ScrollView style={styles.ScrollView}>
                <TextInput mode='flat' placeholder='Title...'></TextInput>
                <Caption>Rest Timer</Caption>
                <TextInput mode='flat' placeholder='Note...'></TextInput>
            </ScrollView>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        margin: 15,
        
    }
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderTopWidth: 1,
        
        
    },
    title: {
        fontSize: 18,
    },
});

// Export the WorkoutDetailScreen for use in other files
export default WorkoutDetailScreen;