import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ExerciseCreateScreen= () => {
    return ( 
        <View style={styles.screen}>
            <Text>I am the ExerciseCreateScreen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default ExerciseCreateScreen;