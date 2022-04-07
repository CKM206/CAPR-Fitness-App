import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const ExerciseCreateScreen= () => {
    const [name, setName] = useState('');
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
                    icon={<Ionicons name="checkmark-circle-outline" size={24} color="black" /> } 
                    title='Strength' 
                    type='clear' 
                />
                <Button 
                    icon={<Ionicons name="checkmark-circle-outline" size={24} color="black" /> } 
                    title='Timed' 
                    type='clear' 
                />
                <Button 
                    icon={<Ionicons name="checkmark-circle-outline" size={24} color="black" /> } 
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
        //margin: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        wdith: '80%'
    }
});

export default ExerciseCreateScreen;