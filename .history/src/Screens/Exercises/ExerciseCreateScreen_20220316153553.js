import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
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
            <Button icon={
                <Ionicons name="checkmark-circle-outline" size={24} color="black" />
  } title='Strength' type='clear' />

 
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
    }
});

export default ExerciseCreateScreen;