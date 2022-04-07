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
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';

// Imports | 3rd Party
import {Text, Title, Subheading, Caption, TextInput, IconButton, Button, Divider } from 'react-native-paper';

// Imports | Components 


// Imports | Data Contexts


// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({navigation, route}) => {
    
    const { title, setTitle } = useState('');
    const { note, setNote } = useState('');

    const exercisesFooterComponent = () => {
        return (
            <>
                <Button
                    onPress={() => {navigation.navigate('WorkoutExercise')}}
                >
                    Add Exercise
                </Button>
                <Button
                    onPress={() => {}}
                >
                    Cancel Workout
                </Button>
            </>
        );
    };
    
    return ( 
        <View>
            <TextInput style={styles.textInput} 
                            value={title} 
                            mode='flat' 
                            label='Title'
                            dense
                            placeholder='Title...'  
                            onChangeText={(text) => changeTitle(text)}
                        />           
                        <TextInput style={styles.textInput}
                            value={note}
                            mode='flat' 
                            label='Note'
                            dense
                            
                            placeholder='Note...'  
                            onChangeText={(text) => changeNote(text)}
                        />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    scrollView: {
        //flex: 1,
        margin: 15,

    },
    parentRow: {
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        alignItems: 'center',
        //alignContent: 'flex-end',
        //borderWidth: 1,
        //paddingVertical: 10,
        marginLeft: 5,
        //marginTop: 10,
        //borderWidth: 1,
        //width: '50%'      
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '75%',
        alignItems: 'center',
        paddingBottom: 5
        //borderWidth: 1,      
    },
    title: {
        fontSize: 18,
    },
    exerciseCard: {
        borderWidth: 1,
        borderColor: 'red',
    },
    textInput : {
        backgroundColor: 'transparent'
    }
});

// Export the WorkoutDetailScreen for use in other files
export default WorkoutDetailScreen;