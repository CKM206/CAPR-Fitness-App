import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const ExerciseCreateScreen= () => {
    return ( 
        <View style={styles.screen}>
            <TextInput />
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default ExerciseCreateScreen;