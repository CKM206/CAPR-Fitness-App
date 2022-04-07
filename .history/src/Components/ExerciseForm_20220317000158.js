/**
 *  Author:   Calvin May
 *  
 *  Date:     03/16/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseTypeForm.js
 *  Description: ...
 */

// Imports | React +
import React, {useState, useReducer} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

// Imports | 3rd Party

import { Button, RadioButton, Text, Subheading, Divider } from 'react-native-paper';
// Imports | Components 

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

// Create the ExerciseTypeForm Component - Deconstruct required props
const ExerciseForm = ({initialValues}) => {
    
    const [state, dispatch] = useReducer(reducer, { name: initialValues.name, exerciseType: initialValues.exerciseType, muscles: initialValues.muscles, 
                                                    equipment: initialValues.equipment, force: initialValues.force });
    const { name, exerciseType, muscles, equipment, force } = state;                                                
    console.log(name);
    console.log(exerciseType);
    console.log(muscles);
    console.log(equipment);
    console.log(force);
    return (
        <>
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

            <Divider style={{ marginHorizontal: 10}}/>

            <Subheading h4>Muscles Worked</Subheading>
            <View style={styles.row}>
                <Button 
                    icon={ state.muscles.includes('Chest') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Chest'})}
                />  Chest
                <Button 
                    icon={ state.muscles.includes('Back') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Back'})}
                />  Back
                <Button 
                    icon={ state.muscles.includes('Shoulders') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Shoulders'})}
                />  Shoulders
                <Button 
                    icon={ state.muscles.includes('Legs') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Legs'})}
                />  Legs
                <Button 
                    icon={ state.muscles.includes('Arms') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Arms'})}
                />  Arms
                <Button 
                    icon={ state.muscles.includes('Core') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Core'})}
                />  Core
                <Button 
                    icon={ state.muscles.includes('Full body') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Full body'})}
                />  Full body
                <Button 
                    icon={ state.muscles.includes('Cardio') ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                    mode='text' compact
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Cardio'})}
                />  Cardio
            </View>
        </>
    );
    // Render this on the Screen
    /*return ( 
        <>
            <Input 
                label='Name:' 
                placeholder='Bench Press'
                value={name}
                onChangeText={(text) => dispatch({ type: 'change_name', payload: text})}
            />
            
            
 
            <Text h4>Muscles Worked</Text>
            <View style={styles.row}>
                <Button 
                    icon={ state.muscles.includes('Chest') 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Chest' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Chest'})}
                />
                <Button 
                    icon={ state.muscles.includes('Back') 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Back' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Back'})}
                />
                <Button 
                    icon={ state.muscles.includes('Shoulders') 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Shoulders' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Shoulders'})}
                />
                <Button 
                    icon={ state.muscles.includes('Legs') 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Legs' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Legs'})}
                />
                <Button 
                    icon={ state.muscles.includes('Arms') 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Arms' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Arms'})}
                />
                <Button 
                    icon={ state.muscles.includes('Core') 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Core' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Core'})}
                />
                <Button 
                    icon={ state.muscles.includes('Full body') 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Full body' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Full body'})}
                />
                <Button 
                    icon={ state.muscles.includes('Cardio') 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cardio' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_muscles', payload: 'Cardio'})}
                />
            </View>


            <Text h4>Equipment</Text>
            <View style={styles.row}>
                <Button 
                    icon={ equipment === 'Barbell' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Barbell' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Barbell'})}
                />
                <Button 
                    icon={ equipment === 'Dumbbell' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Dumbbell' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Dumbbell'})}
                />
                <Button 
                    icon={ equipment === 'Kettlebell' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Kettlebell' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Kettlebell'})}
                />
                <Button 
                    icon={ equipment === 'Cable Machine' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cable Machine' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Cable Machine'})}
                />
                <Button 
                    icon={ equipment === 'Machine' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Machine' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Machine'})}
                />
                <Button 
                    icon={ equipment === 'Bodyweight' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Bodyweight' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Bodyweight'})}
                />
                <Button 
                    icon={ equipment === 'Other' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Other' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_equipment', payload: 'Other'})}
                />
            </View>


            <Text h4>Force</Text>
            <View style={styles.row}>
            <Button 
                    icon={ force === 'Push' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Push' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_force', payload: 'Push'})}
            />
            <Button 
                    icon={ force === 'Pull' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Pull' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_force', payload: 'Pull'})}
            />    
            </View>

        </>
    );*/
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
        alignContent: 'center',
        alignItems: 'center',
        //width: '80%',
        
    },
});

// Export the ExerciseTypeForm for use in other files
export default ExerciseForm;