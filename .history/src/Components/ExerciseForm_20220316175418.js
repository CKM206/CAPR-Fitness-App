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
import { StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
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
                // Create copy of favouriteMeals array
                const updatedMuscles = [...state.muscles];
                updatedMuscles.splice(updatedMuscles.indexOf(action.payload), 1);
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
const ExerciseTypeForm = ({initialValues}) => {
    
    const [state, dispatch] = useReducer(reducer, { name: initialValues.name, exerciseType: initialValues.exerciseType, muscles: initialValues.muscles, 
                                                    equipment: initialValues.equipment, force: initialValues.force });
    const { name, exerciseType, muscles, equipment, force } = state;                                                
    console.log(name);
    console.log(exerciseType);
    console.log(muscles);
    console.log(equipment);
    console.log(force);
    // Render this on the Screen
    return ( 
        <>
            <Input 
                label='Name:' 
                placeholder='Bench Press'
                value={name}
                onChangeText={(text) => dispatch({ type: 'change_name', payload: text})}
            />
            

            <Text h4>Exercise Type</Text>
            <View style={styles.row}>
                <Button 
                    icon={ exerciseType === 'Strength' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Strength' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_type', payload: 'Strength'})}
                />
                <Button 
                    icon={ exerciseType === 'Timed' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Timed' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_type', payload: 'Timed'})}
                />
                <Button 
                    icon={ exerciseType === 'Cardio' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cardio' 
                    type='clear' 
                    onPress={()=> dispatch({type: 'change_type', payload: 'Cardio'})}
                />
            </View>
 
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
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        //width: '80%',
        
    },
});

// Export the ExerciseTypeForm for use in other files
export default ExerciseTypeForm;