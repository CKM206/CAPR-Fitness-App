import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const ExerciseCreateScreen= () => {
    const [name, setName] = useState('');

    return ( 
        <View style={styles.screen}>
            <Input 
                label='Name:' 
                placeholder='Bench Press'
                value={name}
                onChangeText={() => setName(value)}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExerciseCreateScreen;