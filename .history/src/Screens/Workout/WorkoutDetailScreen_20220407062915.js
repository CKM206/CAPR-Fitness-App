/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutDetailScreen.js
 *  Description: ...
 */

// Imports | React +
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';

// Imports | 3rd Party
import {Text, Title, Subheading, Caption, TextInput, IconButton, Button, Divider, Portal, Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';


// Imports | Components 
import WorkoutExerciseContainer from '../../Components/WorkoutExerciseContainer';

// Imports | Data Contexts
import { selectAllExercises } from '../../redux/features/workout/workoutExercisesSlice'
import { create_workout, selectActiveWorkout, update_workout, cancel_workout } from '../../redux/features/workout/workoutSlice';
import { selectCompletedSets } from '../../redux/features/workout/workoutSetsSlice';

const ProcessWorkout = (activeWorkout, workoutExercises, completedSets, navigation) => {

    // Check for at Required Fields to Save a Workout!
    if (workoutExercises.length > 0 && completedSets.length > 0 && activeWorkout.title != '')
    {
        // Go to WorkoutComplete Screen
        navigation.navigate('WorkoutComplete', { activeWorkout, workoutExercises, completedSets })
    }
    // If Not Show Errors
    else{
        
        console.log('Must Set All Fields to Save a Workout');
    }
}


// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({ navigation, route }) => {
    // Redux Config
    const dispatch = useDispatch();
    const activeWorkout = useSelector(selectActiveWorkout);
    const workoutExercises = useSelector(selectAllExercises);
    const completedSets = useSelector(selectCompletedSets);

    
    useEffect(() => {

        console.log('Active Workout: ', activeWorkout)

        if (activeWorkout)
        {
            console.log('Skipped Creating a Workout!')
        }
        else
        {
            console.log('Beginning A New Workout!');
            dispatch(create_workout({ title, note, paused, timeStarted: Date(), activeWorkout: true, canComplete: false}));
        }
    }, []);

    // State Config
    const [ title, setTitle ] = useState(activeWorkout ? activeWorkout.title : '');
    const [ note, setNote ] = useState(activeWorkout ? activeWorkout.note : '');
    const [paused, setPaused] = useState(true);

    const exercisesFooterComponent = () => {
        return (
            <>
                <Button
                    onPress={() => {navigation.push('WorkoutExercise')}}
                >
                    Add Exercise
                </Button>
                <Divider />
                <Button
                    onPress={() => {
                        dispatch(cancel_workout(activeWorkout._id))
                        navigation.navigate('WorkoutSelection');
                    }}
                >
                    Cancel Workout
                </Button>
                <Button
                    onPress={() => ProcessWorkout(activeWorkout, workoutExercises, completedSets, navigation)}
                >
                    Finish!
                </Button>
            </>
        );
    };

    console.log('WORKOUT DETAIL RENDERING')
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
                            onChangeText={(text) => setTitle(text)}
                            onBlur={ () => dispatch(update_workout({ id: activeWorkout._id, changes: { title } })) }
                        />           
                        <TextInput style={styles.textInput}
                            value={note}
                            mode='flat' 
                            label='Note'
                            dense
                            placeholder='Note...'  
                            onChangeText={(text) => setNote(text)}
                            onBlur={ () => dispatch(update_workout({ id: activeWorkout._id, changes: { note } })) }
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
            <Portal.Host>
                <Snackbar></Snackbar>
            </Portal.Host>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //margin: 15,

    },
    
    textInput : {
        backgroundColor: 'transparent'
    }
});

// Export the WorkoutDetailScreen for use in other files
export default WorkoutDetailScreen;