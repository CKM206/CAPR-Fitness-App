/**
 *  Author:   Calvin May
 *  
 *  Date:     03/16/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseTypeForm.js
 *  Description: ...
 */

// Imports | React +
import React, {useReducer} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// Imports | 3rd Party
import { Button, RadioButton, Text, Subheading, Divider, TextInput, FAB } from 'react-native-paper';

// Imports | Components 
import MusclesSelection from './MusclesSelection';
// Imports | Data Contexts


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

const isStateSet = ({ name, exerciseType, muscles, equipment, force }) => {

    if (name && exerciseType && equipment && force && muscles.length > 0)
    {
        return true;
    }
    return false;
};

// Create the ExerciseTypeForm Component - Deconstruct required props
const ExerciseForm = ({ initialValues, onSubmit }) => {
    
    const [state, dispatch] = useReducer(reducer, { name: initialValues.name, exerciseType: initialValues.exerciseType, muscles: initialValues.muscles, 
                                                    equipment: initialValues.equipment, force: initialValues.force });
    const { name, exerciseType, muscles, equipment, force } = state;                                                
    
    
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
                mode='outlined'
                label='Exercise Name'
                value={name}
                onChangeText={(text) => dispatch({type: 'change_name', payload: text})}
            />
            <Subheading>Exercise Type</Subheading>
                <View style={styles.row}>
                    <RadioButton 
                        value='Strength' 
                        status={ exerciseType === 'Strength' ? 'checked' : 'unchecked'} 
                        onPress={()=> dispatch({type: 'change_type', payload: 'Strength'})}
                    />
                    <Text>Strength</Text>
                    <RadioButton 
                        value='Timed' 
                        status={ exerciseType === 'Timed' ? 'checked' : 'unchecked'} 
                        onPress={()=> dispatch({type: 'change_type', payload: 'Timed'})}
                    />
                    <Text>Timed</Text>
                    <RadioButton 
                        value='Cardio' 
                        status={ exerciseType === 'Cardio' ? 'checked' : 'unchecked'} 
                        onPress={()=> dispatch({type: 'change_type', payload: 'Cardio'})}
                    />
                    <Text>Cardio</Text>
                </View>

                <Divider style={{ marginBottom: 10}}/>

                <Subheading>Muscles Worked</Subheading>
                <View style={styles.row}>
                    <MusclesSelection 
                        selectedMuscles={muscles} 
                        exerciseType={exerciseType} 
                        allDisabled={!exerciseType}
                        onSelect={(selection) => dispatch({ type: 'change_muscles', payload: selection})}        
                    />
                </View>

                <Divider style={{ marginBottom: 10}}/>

                <Subheading>Equipment</Subheading>
                <View style={styles.row}>
                    <Button 
                        icon={ equipment === 'Barbell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Barbell'})}
                    >   Barbell
                    </Button>    
                    <Button 
                        icon={ equipment === 'Dumbbell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Dumbbell'})}
                    >   Dumbbell
                    </Button>
                    <Button 
                        icon={ equipment === 'Kettlebell' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Kettlebell'})}
                    >   Kettlebell
                    </Button>
                    <Button 
                        icon={ equipment === 'Cable Machine' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Cable Machine'})}
                    >   Cable Machine
                    </Button>
                    <Button 
                        icon={ equipment === 'Machine' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Machine'})}
                    >   Machine
                    </Button>
                    <Button 
                        icon={ equipment === 'Bodyweight' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Bodyweight'})}
                    >   Bodyweight
                    </Button>
                    <Button 
                        icon={ equipment === 'Other' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                        mode='text' compact
                        onPress={()=> dispatch({type: 'change_equipment', payload: 'Other'})}
                    >   Other
                    </Button>    
                </View>

                <Divider style={{ marginBottom: 10}}/>

                <Subheading>Force</Subheading>
                <View style={styles.row}>
                    <Button 
                            icon={ force === 'Push' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                            mode='text' compact
                            onPress={()=> dispatch({type: 'change_force', payload: 'Push'})}
                    > Push
                    </Button>
                    <Button 
                            icon={ force === 'Pull' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                            mode='text' compact 
                            onPress={()=> dispatch({type: 'change_force', payload: 'Pull'})}
                    > Pull  
                    </Button>
                </View>
            </ScrollView>
            <FAB 
                style={styles.fab}
                icon='ios-add'
                disabled={isStateSet(state) ? false : true}
                onPress={() => {onSubmit(state)}}
            />
        </>
    );
    
};

ExerciseForm.defaultProps = {
    initialValues: {
        name: '',
        exerciseType: '',
        muscles: [],
        equipment: '',
        force: ''
    }
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        //padding: 5
        //alignContent: 'center',
        //alignItems: 'center',
        //width: '80%',
        
    },
    fab: {
        position: 'absolute',
        margin: 10,
        bottom: 5,
        right: 5,
        fontSize: 2
    }
});

// Export the ExerciseTypeForm for use in other files
export default ExerciseForm;