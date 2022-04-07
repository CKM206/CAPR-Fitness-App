import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import ExerciseTypeForm from '../../Components/ExerciseTypeForm';

const ExerciseCreateScreen= () => {
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
    return ( 
        <View style={styles.screen}>
            <Input 
                label='Name:' 
                placeholder='Bench Press'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            
            <Text>Exercise Type</Text>

            <View style={styles.row}>
                <ExerciseTypeForm exerciseType={exerciseType} onSubmit={ (value) => setExerciseType(value)}/>
            </View>
 
            <Text>Muscles Worked</Text>
            <Text>Equipment</Text>
            
            <Text>Force</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
        //alignItems: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //justifyContent: 'flex-start',
        alignContent: 'flex-start',
        //alignSelf: 'flex-start',
        //width: '80%',
        paddingHorizontal: 10,
        borderWidth: 1,
    },
});

export default ExerciseCreateScreen;