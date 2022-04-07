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
import WorkoutExerciseMenu from './WorkoutExerciseMenu';
import SetInput from './SetInput';

// Imports | Redux
import { useSelector, useDispatch } from 'react-redux';
import {add_set, add_exercise_set, remove_exercise_set } from '../redux/features/workout/workoutSetsSlice';
import { removeExercise } from '../redux/features/workout/workoutExercisesSlice';
import { selectAllExercises, selectExerciseById } from '../redux/features/exercises/exercisesSlice';
import { selectSetIds, selectSetsOfExercise } from '../redux/features/workout/workoutSetsSlice';




// Create the WorkoutExerciseContainer Component - Deconstruct required props
const WorkoutExerciseContainer = ({ workoutExercise }) => {
    //Redux Config
    const dispatch = useDispatch();
    const exercise = useSelector((state) => selectExerciseById(state, workoutExercise.exercise_id))
    const exerciseSets = useSelector((state) => selectSetsOfExercise(state, workoutExercise ))

    // State Config
    console.log('Exercise Sets: ', exerciseSets);

    return ( 
        <>
        <View style={styles.exerciseCard}>
            <View style={styles.cardHeader}>
                <Title>{exercise.name}</Title>
                <WorkoutExerciseMenu removeExercise={() => dispatch(removeExercise(workoutExercise))}/>
            </View>
            <View style={styles.headingRow}>
                <View style={styles.setInfo}>
                    <Caption>SET</Caption>
                    <Caption>Prev</Caption>
                </View>
                
                <View style={styles.metricsInfo}>
                    <Caption>Weight</Caption>
                    <Caption>Reps</Caption>
                </View>
            </View>
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
                                <View style={styles.setRow}>
                                    <Subheading>{exerciseSets.indexOf(item)+1}</Subheading>               
                                        <SetInput setId={item._id}  />
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
                    tension={30}
                    swipeToOpenPercent={65}
                    swipeToOpenVelocityContribution={10}
                    onRowDidOpen={(item) => dispatch(remove_exercise_set({_id: item, exercise_id: workoutExercise._id }))}
                />
            </View>
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    headingRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        marginRight: '25%',
        //marginLeft: 8,
    },
    metricsInfo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        borderWidth: 1,  
        borderColor: 'red',
        marginRight: '5%'
    },
    setInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderWidth: 1,  
        borderColor: 'blue',
        marginHorizontal: 9,
    },
    setRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //alignContent: 'flex-end',
        borderWidth: 1,
        //paddingVertical: 10,
        //marginLeft: 5,
        paddingLeft: 15,
        //marginTop: 10,
        //width: '50%'   
        backgroundColor: 'white'     
    },
    
    inputTitle: {
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
    exerciseCard: {
        borderWidth: 1,
        borderColor: 'red',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hiddenRow: {
        backgroundColor: 'red', 
        //flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
    },
    trashIcon: {
        backgroundColor: 'transparent'
    }
});

// Export the WorkoutExerciseContainer for use in other files
export default WorkoutExerciseContainer;