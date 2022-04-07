/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExerciseContainer.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

// Imports | 3rd Party
import { Title } from 'react-native-paper';
// Imports | Components 

// Imports | Redux
import { useSelector, useDispatch } from 'react-redux';
import { addExercises } from '../redux/features/exercises/exercisesSlice'
import { selectAllExercises, selectExerciseById } from '../redux/features/exercises/exercisesSlice';




// Create the WorkoutExerciseContainer Component - Deconstruct required props
const WorkoutExerciseContainer = ({ exerciseId }) => {
    //console.log(item)
    const dispatch = useDispatch();
    const exercise = useSelector((state) => selectExerciseById(state, exerciseId))

    console.log(exercise);
    // Render this on the Screen
    return ( 
        <>
        <View style={styles.exerciseCard}>
            <Title>{exercise.name}</Title>
                <FlatList 
                    data={[]}
                    ListFooterComponent={
                        <>
                            <Button labelStyle={{fontSize: 12}} compact onPress={() => {}}>
                            Add Set
                            </Button>
                        </>
                    }
                    keyExtractor={(set, index) => index}
                    renderItem={(sets) => {
                        return (
                            <>
                                <Divider />
                                <View style={styles.parentRow}>
                                    <Subheading>{`Set: ${sets.item.set}`}</Subheading>
                                    
                                    { item.exercise.exerciseType === 'Strength'
                                    ? <View style={styles.metricsRow}>
                                    <Caption>Weight</Caption>
                                    <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' value={`${sets.item.weight}`} placeholder='-' dense/>
                                    <Caption>Reps</Caption> 
                                    <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' value={`${sets.item.reps}`} placeholder='-' dense/>
                                    </View>
                                    : <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' placeholder='-' dense/>}
                                    <IconButton icon='square-outline' onPress={() => {}}/>
                                </View> 
                            </>
                        );        
                    }                   
                    }
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
});

// Export the WorkoutExerciseContainer for use in other files
export default WorkoutExerciseContainer;