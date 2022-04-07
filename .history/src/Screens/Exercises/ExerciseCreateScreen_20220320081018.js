import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Button, RadioButton, Text, Subheading, Divider, TextInput, FAB } from 'react-native-paper';

// Imports | Components
import ExerciseForm from '../../Components/ExerciseForm';

// Imports | Redux/Data Management
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, selectExercises } from '../../redux/features/exercises/exercisesSlice';

// Reducer for Screen Level State
const reducer = (state, action) => {

    switch (action.type) {
        case 'change_name':
            return { ...state, name: action.payload };
        case 'change_type':
            return { ...state, exerciseType: action.payload };    
        case 'change_muscles':
            if (state.muscles.includes(action.payload)) 
            {
                // Create copy of muscles array
                const updatedMuscles = [...state.muscles];
                // Remove the element at the elements index
                updatedMuscles.splice(updatedMuscles.indexOf(action.payload), 1);
                // Return the new State
                return {...state, muscles: updatedMuscles }
            }
            else
            {
                return {...state, muscles: state.muscles.concat(action.payload) }
            }

        case 'change_equipment':
            return { ...state, equipment: action.payload };;
        case 'change_force':
            return { ...state, force: action.payload };;
                            
        default:
            return state;
    }
};

// Helper function - Determines if all necessary components have been set
const isStateSet = ({ name, exerciseType, muscles, equipment, force }) => {

    if (name && exerciseType && equipment && force && muscles.length > 0)
    {
        return true;
    }
    return false;
};

const ExerciseCreateScreen= ({ navigation }) => {
    const exercises = useSelector(selectExercises);
    const dispatch = useDispatch();
    const exerciseStatus = useSelector(state => state.exercises.status);


    useEffect(() => {
        if (exerciseStatus === 'succeeded') {
            
            
            console.log('Im in Use Effect');
        }
        else {

        }

    },[exerciseStatus, navigation]);

    console.log(`CreateScreen: State=  ${exerciseStatus}`);
    return ( 
        <View style={styles.screen}>
            <ExerciseForm  onSubmit={(state) => {
                dispatch(addExercise(state)).unwrap()
                .then((originalPromiseResult) => {
                    navigation.goBack();
                })
                .catch((rejectedValueOrSerializedError) => {
                    console.log('Error');
                })
                //console.log(`CreateScreen: State=  ${exerciseStatus}`);
                //navigation.goBack();
            }}/>
        </View>    
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
    },
    
});

export default ExerciseCreateScreen;