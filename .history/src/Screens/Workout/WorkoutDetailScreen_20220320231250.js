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
import { useSelector, useDispatch } from 'react-redux';


// Imports | Components 
import WorkoutExerciseContainer from '../../Components/WorkoutExerciseContainer';

// Imports | Data Contexts
import { selectAllExercises } from '../../redux/features/workout/workoutExercisesSlice'


// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({navigation, route}) => {
    const { title, setTitle } = useState('');
    const { note, setNote } = useState('');
    const dispatch = useDispatch();
    const workoutExercises = useSelector(selectAllExercises);

    console.log(workoutExercises);

    const exercisesFooterComponent = () => {
        return (
            <>
                <Button
                    onPress={() => {navigation.push('WorkoutExercise')}}
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
        <View style={styles.screen}>
            <FlatList 
                ListFooterComponent={exercisesFooterComponent}
                ListHeaderComponent={
                    <>
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
                    </>
                }
                data={workoutExercises}
                keyExtractor={(exercise) => exercise._id}
                renderItem={({ item }) => {
                    if (item) {
                    return (                 
                        <WorkoutExerciseContainer workoutExercise={item} />
                        
                    );
                }
                else
                {
                    return null
                }
                }}
            />
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,

    },
    
    textInput : {
        backgroundColor: 'transparent'
    }
});

// Export the WorkoutDetailScreen for use in other files
export default WorkoutDetailScreen;