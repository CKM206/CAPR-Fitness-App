/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutSelectionScreen.js
 *  Description: ...
 */

// Imports | React +
import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// Imports | 3rd Party
import { Text, Card, Title, Subheading, Button, IconButton, Paragraph, Divider } from 'react-native-paper';

// Imports | Components 

// Imports | Data Contexts
import { useSelector } from 'react-redux';
import { selectActiveWorkoutId } from '../../redux/features/workout/workoutSlice';


// Create the WorkoutSelectionScreen Component - Deconstruct required props
const WorkoutSelectionScreen = ({navigation}) => {

    const isActiveWorkout = useSelector(selectActiveWorkoutId);
    useEffect(() => {
        console.log(!isActiveWorkout)

    }, [isActiveWorkout])
    
    // Render this on the Screen
    return ( 
        <View style={styles.screen}>
            <ScrollView>
                <Card mode='outlined' elevation={1} style={{ borderRadius: 15 }} >
                    <Card.Title title='Program Title' subtitle='User' right={(props) => <IconButton {...props} icon="ellipsis-vertical" onPress={() => {}} />}/>
                    <Card.Content>
                        <Text>Additional Program Info here</Text>
                        <Button labelStyle={{fontSize: 12}} mode='text' compact onPress={() => {}}>
                            Begin Next Workout
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
            
            <Subheading>Quick Start...</Subheading>
            <Divider style={{marginRight: '70%'}} />
            <Button 
                style={{ width: '100%'}}
                onPress={() => navigation.navigate('WorkoutDetail')}
            >   Begin Empty Workout
            </Button>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
    },
    programScroll: {

    },
    currentProgramCard: {

    },
});

// Export the WorkoutSelectionScreen for use in other files
export default WorkoutSelectionScreen;