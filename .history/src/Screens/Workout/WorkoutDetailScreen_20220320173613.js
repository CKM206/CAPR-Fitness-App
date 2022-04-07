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
import { selectAllExercises, add_exercise } from '../../redux/features/workout/workoutExercisesSlice'


// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({navigation, route}) => {
    
    const { title, setTitle } = useState('');
    const { note, setNote } = useState('');
    const dispatch = useDispatch();
    const workoutExercises = useSelector(selectAllExercises);
    console.log(workoutExercises);
    return ( 
        <View style={styles.screen}>
            <FlatList 
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
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                    return (
                        //state.exercises[0].exercise._id != null
                        //?
                        //<WorkoutExerciseContainer />
                        <Text>Exercise</Text>
                        //: null
                        );
                    }}
                    ListFooterComponent={
                        <>
                            <Button
                                onPress={() => {dispatch(add_exercise({ _id: 1,  }))}}
                            >
                                Add Exercise
                            </Button>
                            <Button
                                onPress={() => {}}
                            >
                                Cancel Workout
                            </Button>
                        </>
                    }
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