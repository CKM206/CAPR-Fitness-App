import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, SubHeading, Title } from 'react-native-paper';
import { Context } from '../../Contexts/ExerciseContext';

const ExerciseDetailScreen= ({navigation, route}) => {

    const { state } = useContext(Context);
    const exercise = state.find((exercise) => exercise._id === route.params._id)

    navigation.setOptions({ title: exercise.name });

    return ( 
        <View style={styles.screen}>
            <Title>Exercise Information</Title>
            
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