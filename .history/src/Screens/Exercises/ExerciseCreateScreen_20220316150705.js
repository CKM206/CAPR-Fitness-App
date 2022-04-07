import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const ExerciseCreateScreen= () => {
    return ( 
        <View style={styles.screen}>
            <Input 
                //label='Exercise' 
                placeholder='Bench Press'
            />
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default ExerciseCreateScreen;