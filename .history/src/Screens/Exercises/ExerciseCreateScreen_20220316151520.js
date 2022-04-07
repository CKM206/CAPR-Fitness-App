import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Input, Divider } from 'react-native-elements';

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
            <Divider />
            <Text>Hello</Text>
            <Divider />
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExerciseCreateScreen;