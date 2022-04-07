/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutSelectionScreen.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// Imports | 3rd Party
import { Text, Card, Title, Subheading, Button } from 'react-native-paper';
// Imports | Components 

// Imports | Data Contexts


// Create the WorkoutSelectionScreen Component - Deconstruct required props
const WorkoutSelectionScreen = (props) => {
    
    // Render this on the Screen
    return ( 
        <View style={styles.screen}>
            <ScrollView>
                <Card mode='elevated' elevation={10} >
                    <Card.Title title='Title' subtitle='SubTitle' />
                    <Card.Content><Text>Hello</Text></Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
    },
    programScroll: {

    },
    currentProgramCard: {

    }
});

// Export the WorkoutSelectionScreen for use in other files
export default WorkoutSelectionScreen;