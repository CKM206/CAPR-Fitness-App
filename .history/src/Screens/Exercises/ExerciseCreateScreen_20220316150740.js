import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const ExerciseCreateScreen= () => {
    return ( 
        <View style={styles.screen}>
            <Input 
                label='Name:' 
                placeholder='Bench Press'
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