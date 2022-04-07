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


const MetricsTitleComponent = ({exerciseType}) => {

    switch(exerciseType){
        case 'Strength':
            return (
                <>
                    <Caption style={{width: 65, textAlign: 'center'}}>Weight</Caption>
                    <Caption style={{width: 65, textAlign: 'center'}}>Reps</Caption>
                </>
            );
        case 'Timed':
            return (
                <>
                    <Caption style={{width: 65, textAlign: 'center'}}>Weight</Caption>
                    <Caption style={{width: 95, textAlign: 'center'}}>Duration</Caption>
                </>
            );
        case 'Cardio':
            return (
                <>
                    <Caption style={{width: 65, textAlign: 'center'}}>Distance</Caption>
                    <Caption style={{width: 95, textAlign: 'center'}}>Duration</Caption>
                </>
            );
        default:
            return null;
    }

}


// Create the WorkoutExerciseContainer Component - Deconstruct required props
const WorkoutExerciseContainer = ({ workoutExercise }) => {
    //Redux Config
    const dispatch = useDispatch();
    const exercise = useSelector((state) => selectExerciseById(state, workoutExercise.exercise_id))
    const exerciseSets = useSelector((state) => selectSetsOfExercise(state, workoutExercise ))

    // State Config
    

    return ( 
        <>
        <View style={styles.exerciseCard}>
            <View style={styles.cardHeader}>
                <Title>{exercise.name}</Title>
                <WorkoutExerciseMenu removeExercise={() => dispatch(removeExercise(workoutExercise))}/>
            </View>
            <View style={styles.headingRow}>
                <View style={styles.setInfo}>
                    <Caption style={{ flex: 1 }}>Set</Caption>
                    <Caption style={{ flex: 2 }}>Prev</Caption>  
                </View>
                
                <View style={styles.metricsInfo}>
                    <View style={{flex:4, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <MetricsTitleComponent exerciseType={exercise.exerciseType} />
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <IconButton size={20} />
                    </View>
                </View>
            </View>
                <SwipeListView 
                    data={exerciseSets}
                    ListFooterComponent={
                        <>
                            <Button labelStyle={{fontSize: 12}} compact onPress={(state) => {
                                dispatch(add_exercise_set({restTimer: 0, isComplete: false, exercise_id: workoutExercise._id }))
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
                                    <View {...props}>
                                    <View style={styles.setInfo}>
                                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                            <Subheading>{exerciseSets.indexOf(item)+1}</Subheading>  
                                        </View>
                                        <View style={{flex:2, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                            <Caption >
                                                {exercise.exerciseType === 'Strength' ? '999lbs x 999' 
                                                : exercise.exerciseType === 'Timed' ? '999lbs, 99:99:99' :'999km, 99:99:99' }
                                            </Caption> 
                                        </View> 
                                    </View>    
                                    <View style={styles.metricsInfo}>     
                                        <SetInput setId={item} exerciseType={exercise.exerciseType} />
                                    </View>
                                    </View>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    metricsInfo: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor: 'white',
    },
    setInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,
        
    },
    setRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        //borderWidth: 1,
    },  
    inputTitle: {
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
    exerciseCard: {
        //borderWidth: 1,
        //borderColor: 'red',
        
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hiddenRow: {
        backgroundColor: 'red',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //paddingBottom: 5,
        //borderWidth: 1,
    },
    trashIcon: {
        backgroundColor: 'transparent'
    }
});

// Export the WorkoutExerciseContainer for use in other files
export default WorkoutExerciseContainer;