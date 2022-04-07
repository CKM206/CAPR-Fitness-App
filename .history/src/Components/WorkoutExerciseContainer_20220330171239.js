/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExerciseContainer.js
 *  Description: ...
 */

// Imports | React +
import React, { useMemo, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';

// Imports | 3rd Party
import { Title, Button, Divider, IconButton, TextInput, Caption, Subheading, Avatar } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
// Imports | Components 

// Imports | Redux
import { useSelector, useDispatch } from 'react-redux';
import {add_set, add_exercise_set, remove_exercise_set } from '../redux/features/workout/workoutSetsSlice';
import { selectAllExercises, selectExerciseById } from '../redux/features/exercises/exercisesSlice';
import { selectSetIds, selectSetsOfExercise } from '../redux/features/workout/workoutSetsSlice';




// Create the WorkoutExerciseContainer Component - Deconstruct required props
const WorkoutExerciseContainer = ({ workoutExercise }) => {
    //console.log(workoutExercise);
    const dispatch = useDispatch();
    const exercise = useSelector((state) => selectExerciseById(state, workoutExercise.exercise_id))
    const exerciseSets = useSelector((state) => selectSetsOfExercise(state, workoutExercise ))

    console.log('Exercise Set: ', exerciseSets.length);
    // useMemo(() => {

    //     workoutExercise.sets.for

    // },[workoutExercise])

    //console.log(sets);
    // Render this on the Screen
    return ( 
        <>
        <View style={styles.exerciseCard}>
            <Title>{exercise.name}</Title>
                <SwipeListView 
                    data={exerciseSets}
                    ListFooterComponent={
                        <>
                            <Button labelStyle={{fontSize: 12}} compact onPress={(state) => {
                                dispatch(add_exercise_set({reps: 0, weight: 0, duration: 0, restTimer: 0, isComplete: false, exercise_id: workoutExercise._id }))
                            }}>
                            Add Set
                            </Button>
                        </>
                    }
                    keyExtractor={(set) => set}
                    renderItem={({item}, rowMap) => {
                        return (
                            <>
                                
                                
                                <View style={styles.parentRow}>
                                    <Subheading>Set: {exerciseSets.indexOf(item)+1}</Subheading>
                                    
                                    { exercise.exerciseType === 'Strength'
                                    ? <View style={styles.metricsRow}>
                                    <Caption>Weight</Caption>
                                    <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' placeholder='-' dense/>
                                    <Caption>Reps</Caption> 
                                    <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric'  placeholder='-' dense/>
                                    </View>
                                    : <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' placeholder='-' dense/>}
                                    <IconButton icon='square-outline' onPress={() => {}}/>
                                    
                                </View> 
                                
                                </>
                            
                        );        
                    }                   
                    }
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.hiddenRow}>
                            <Avatar.Icon style={styles.trashIcon} size={32} color='white' icon='ios-trash' />
                        </View>
                    )}
                    //RightActionValue={-100}
                    
                    rightOpenValue={-(Dimensions.get('screen').width)}
                    disableRightSwipe
                    initialRightActionState={false}
                    friction={50}
                    tension={50}
                    swipeToOpenPercent={65}
                    onRowDidOpen={(item) => dispatch(remove_exercise_set({_id: item, exercise_id: workoutExercise._id }))}
                />
            </View>
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    parentRow: {
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        alignItems: 'center',
        //alignContent: 'flex-end',
        //borderWidth: 1,
        //paddingVertical: 10,
        //marginLeft: 5,
        paddingLeft: 15,
        //marginTop: 10,
        //borderWidth: 1,
        //width: '50%'   
        backgroundColor: 'white'     
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '75%',
        alignItems: 'center',
        paddingBottom: 5,
        //borderWidth: 1,  
          
    },
    title: {
        fontSize: 18,
    },
    exerciseCard: {
        borderWidth: 1,
        borderColor: 'red',
    },
    hiddenRow: {
        backgroundColor: 'red', 
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    trashIcon: {
        backgroundColor: 'transparent'
    }
});

// Export the WorkoutExerciseContainer for use in other files
export default WorkoutExerciseContainer;