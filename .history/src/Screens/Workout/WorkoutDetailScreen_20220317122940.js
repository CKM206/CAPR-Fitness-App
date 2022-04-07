/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutDetailScreen.js
 *  Description: ...
 */

// Imports | React +
import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';

// Imports | 3rd Party
import {Text, Title, Subheading, Caption, TextInput, IconButton, Button, Divider } from 'react-native-paper';

// Imports | Components 
import WorkoutHeader from '../../Components/WorkoutHeader';

// Imports | Data Contexts
import { Context as WorkoutContext } from '../../Contexts/WorkoutContext';


// Create the WorkoutDetailScreen Component - Deconstruct required props
const WorkoutDetailScreen = ({navigation}) => {
    const { state, changeTitle, changeNote } = useContext(WorkoutContext);
    
    console.log(state);
    

    const footerComponent = () => {
        return (
            <>
                <Button
                    onPress={() => {navigation.navigate('WorkoutExercise')}}
                >
                    Add Exercise
                </Button>
                <Button
                    onPress={() => {}}
                >
                    Cancel Workout
                </Button>
            </>
        );
    }

    // useEffect (() => {
        

    //     //return listHeader()

    // },[navigation]);
    // Render this on the Screen
    return ( 
        <View>
            <FlatList 
                style={styles.scrollView}
                ListHeaderComponent={
                    <>
                        <TextInput 
                            value={state.title} 
                            mode='flat' 
                            label='Title'
                            placeholder='Title...'  
                            onChangeText={(text) => changeTitle(text)}
                        />           
                        <TextInput 
                            value={state.note}
                            mode='flat' 
                            label='Note'
                            placeholder='Note...'  
                            onChangeText={(text) => changeNote(text)}
                        />
                    </>}
                ListFooterComponent={footerComponent}
                data={state.exercises}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                    return (
                        <View style={styles.exerciseCard}>
                            <Title>{item.exercise.name}</Title>
                            <FlatList 
                                data={item.sets}
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
                            <Button labelStyle={{fontSize: 12}} compact onPress={() => {}}>
                                Add Set
                            </Button>  
                        </View>
                    );
                }}
            />
        </View>
    );
};

WorkoutDetailsScreen.defaultPops = {
        chosenExercises: [],
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    scrollView: {
        //flex: 1,
        margin: 15,

    },
    parentRow: {
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        alignItems: 'center',
        //alignContent: 'flex-end',
        //borderWidth: 1,
        //paddingVertical: 10,
        marginLeft: 5,
        //marginTop: 10,
        //borderWidth: 1,
        //width: '50%'      
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '75%',
        alignItems: 'center',
        paddingBottom: 5
        //borderWidth: 1,      
    },
    title: {
        fontSize: 18,
    },
    exerciseCard: {
        borderWidth: 1,
        borderColor: 'red',
    }
});

// Export the WorkoutDetailScreen for use in other files
export default WorkoutDetailScreen;