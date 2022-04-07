/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutDetailScreen.js
 *  Description: ...
 */

// Imports | React +
import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

// Imports | 3rd Party
import {Text, Title, Subheading, Caption, TextInput, Checkbox, Button, Divider } from 'react-native-paper';

// Imports | Components 
import WorkoutHeader from '../../Components/WorkoutHeader';

// Imports | Data Contexts
import { Context as WorkoutContext } from '../../Contexts/WorkoutContext';

// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({navigation}) => {
    const { state, changeTitle, changeNote } = useContext(WorkoutContext);
    
    const listHeader = () => {
        return (
            <WorkoutHeader titleInitial={state.title} noteInitial={state.note} setNewTitle={(title) => {changeTitle(title)} } setNewNote={(note) => {changeNote(note)} } />
        );
    }
    // Render this on the Screen
    return ( 
        <View>
            <FlatList 
                style={styles.scrollView}
                ListHeaderComponent={listHeader}>
                data={state.exercises}
                renderItem={({item}) => {
                    <Text>item.exercise</Text>
                }}
            </FlatList>
            <Button
                onPress={() => {}}
            >
                Add Exercise
            </Button>
            <Button
                onPress={() => {}}
            >
                Cancel Workout
            </Button>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    scrollView: {
        //flex: 1,
        margin: 15,

    },
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