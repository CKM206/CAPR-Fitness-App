import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Subheading, Title, Divider } from 'react-native-paper';
import { Context } from '../../Contexts/ExerciseContext';

const ExerciseDetailScreen= ({navigation, route}) => {

    const { state } = useContext(Context);
    const exercise = state.find((exercise) => exercise._id === route.params._id)

    navigation.setOptions({ title: exercise.name });

    return ( 
        <View style={styles.screen}>
            <Title>Exercise Information</Title>
            <Divider />
            <View style={styles.row}>  
            <Subheading>Target Muscles: </Subheading>
                <Text>{exercise.muscles}</Text>
            </View>
            <View style={styles.row}>        
                <Subheading>Equipment: </Subheading>
                <Text>{exercise.name}</Text>
            </View>
            <View style={styles.row}>  
            <Subheading>Exercise Type: </Subheading>
                <Text>{exercise.muscles}</Text>
            </View>
            <View style={styles.row}>  
            <Subheading>Applied Force: </Subheading>
                <Text>{exercise.muscles}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
        margin: 15,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        //width: '80%',
        
    },
});

export default ExerciseDetailScreen;