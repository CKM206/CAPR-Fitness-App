/**
 *  Author:   Calvin May
 *  
 *  Date:     03/16/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: ExerciseTypeForm.js
 *  Description: ...
 */

// Imports | React +
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
// Imports | Components 

// Imports | Data Contexts


// Create the ExerciseTypeForm Component - Deconstruct required props
const ExerciseTypeForm = (props) => {
    
    const [name, setName] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [muscles, setMuscles] = useState([]);
    const [equipment, setEquipment] = useState('');
    const [force, setForce] = useState('');
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
                onChangeText={(text) => setName(text)}
            />
            

            <Text h4>Exercise Type</Text>
            <View style={styles.row}>
                <Button 
                    icon={ exerciseType === 'Strength' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Strength' 
                    type='clear' 
                    onPress={()=> setExerciseType('Strength')}
                />
                <Button 
                    icon={ exerciseType === 'Timed' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Timed' 
                    type='clear' 
                    onPress={()=> setExerciseType('Timed')}
                />
                <Button 
                    icon={ exerciseType === 'Cardio' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cardio' 
                    type='clear' 
                    onPress={()=> setExerciseType('Cardio')}
                />
            </View>
 
            <Text h4>Muscles Worked</Text>
            <View style={styles.row}>
                <Button 
                    icon={ muscles === 'Chest' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Chest' 
                    type='clear' 
                    onPress={()=> setMuscles('Chest')}
                />
                <Button 
                    icon={ muscles === 'Back' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Back' 
                    type='clear' 
                    onPress={()=> setMuscles('Back')}
                />
                <Button 
                    icon={ muscles === 'Shoulders' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Shoulders' 
                    type='clear' 
                    onPress={()=> setMuscles('Shoulders')}
                />
                <Button 
                    icon={ muscles === 'Legs' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Legs' 
                    type='clear' 
                    onPress={()=> setMuscles('Legs')}
                />
            </View>
            <View style={styles.row}>
                <Button 
                    icon={ muscles === 'Arms' 
                        ? <Ionicons name="checkmark-circle" size={20} color="green" />
                        : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Arms' 
                    type='clear' 
                    onPress={()=> setMuscles('Arms')}
                />
                <Button 
                    icon={ muscles === 'Core' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Core' 
                    type='clear' 
                    onPress={()=> setMuscles('Core')}
                />
                <Button 
                    icon={ muscles === 'Full body' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Full body' 
                    type='clear' 
                    onPress={()=> setMuscles('Full body')}
                />
                <Button 
                    icon={ muscles === 'Cardio' 
                    ? <Ionicons name="checkmark-circle" size={20} color="green" />
                    : <Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cardio' 
                    type='clear' 
                    onPress={()=> setMuscles('Cardio')}
                />
            </View>
            <Text h4>Equipment</Text>
            <Text h4>Force</Text>

        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    },
});

// Export the ExerciseTypeForm for use in other files
export default ExerciseTypeForm;