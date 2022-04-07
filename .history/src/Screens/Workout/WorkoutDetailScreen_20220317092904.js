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
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
                ListHeaderComponent={listHeader}
                data={state.exercises}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                    return (
                        <View style={styles.exerciseCard}>
                            <Title>{item.exercise.name}</Title>
                            <FlatList 
                                data={item.sets}
                                keyExtractor={(set, index) => index}
                                renderItem={(set) => {
                                    return (
                                        <>
                                        <Divider />
                                        <View style={styles.setRow}>
                                            <Checkbox />
                                            { item.exercise.type === 'Strength'
                                            ? <><TextInput placeholder='5' dense/> <TextInput placeholder='5' dense/></>
                                            : <TextInput placeholder='4' dense/>}
                                            <Subheading>Set: {set.set}</Subheading>
                                        </View>    
                                        </>
                                    );
                                    
                                }                   
                            }
                            />
                        </View>
                    );
                }}
            />
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
    setRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //borderWidth: 1,
        //paddingVertical: 10,
        marginLeft: 5,
        //marginTop: 10,
        borderWidth: 1,
        
        
    },
    title: {
        fontSize: 18,
    },
    exerciseCard: {
        borderWidth: 1,
        borderColor: 'red',
    }
});

// Export the WorkoutDetailScreen for use in other files
export default WorkoutDetailScreen;