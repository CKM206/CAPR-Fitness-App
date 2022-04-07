import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Text, SubHeading, title } from 'react-native-paper';
import { Context } from '../../Contexts/ExerciseContext';

const ExerciseDetailScreen= ({route}) => {

    const { state } = useContext(Context);

    const exercise = state.find((exercise) => blogPost.id === route.params.id)

    return ( 
        <View style={styles.screen}>
            <Title>{exercise.name}</Title>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ExerciseDetailScreen;