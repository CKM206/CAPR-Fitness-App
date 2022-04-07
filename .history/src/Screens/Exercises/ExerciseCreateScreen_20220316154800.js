import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const ExerciseCreateScreen= () => {
    const [name, setName] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    console.log(name)
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
                <Button 
                    icon={<Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Strength' 
                    type='clear' 
                />
                <Button 
                    icon={<Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Timed' 
                    type='clear' 
                />
                <Button 
                    icon={<Ionicons name="checkmark-circle-outline" size={20} color="black" /> } 
                    title='Cardio' 
                    type='clear' 
                />
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
        alignItems: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-start',
        width: '80%',
        //borderWidth: 1,
    }
});

export default ExerciseCreateScreen;