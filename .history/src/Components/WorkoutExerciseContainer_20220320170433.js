/**
 *  Author:   Calvin May
 *  
 *  Date:     03/20/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutExerciseContainer.js
 *  Description: ...
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

// Imports | 3rd Party

// Imports | Components 

// Imports | Data Contexts




// Create the WorkoutExerciseContainer Component - Deconstruct required props
const WorkoutExerciseContainer = (props) => {
    
    // Render this on the Screen
    return ( 
        <>
        <View style={styles.exerciseCard}>
            <Title>{item.exercise.name}</Title>
                <FlatList 
                    data={item.sets}
                    ListFooterComponent={
                        <>
                            <Button labelStyle={{fontSize: 12}} compact onPress={() => {addSet(item.exercise._id)}}>
                            Add Set
                            </Button>
                        </>
                    }
                    keyExtractor={(set, index) => index}
                    renderItem={(sets) => {
                        return (
                            <>
                                <Divider />
                                <View style={styles.parentRow}>
                                    <Subheading>{`Set: ${sets.item.set}`}</Subheading>
                                    
                                    { item.exercise.exerciseType === 'Strength'
                                    ? <View style={styles.metricsRow}>
                                    <Caption>Weight</Caption>
                                    <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' value={`${sets.item.weight}`} placeholder='-' dense/>
                                    <Caption>Reps</Caption> 
                                    <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' value={`${sets.item.reps}`} placeholder='-' dense/>
                                    </View>
                                    : <TextInput style={{ backgroundColor: 'transparent'}} keyboardType='numeric' placeholder='-' dense/>}
                                    <IconButton icon='square-outline' onPress={() => {}}/>
                                </View> 
                            </>
                        );        
                    }                   
                    }
                />
            </View>
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the WorkoutExerciseContainer for use in other files
export default WorkoutExerciseContainer;