/**
 *  Author:   Calvin May
 *  
 *  Date:     04/05/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: SetInput.js
 *  Description: ...
 */

// Imports | React +
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { Caption, TextInput, IconButton } from 'react-native-paper';

// Imports | Components 
import { MaskedTextInput } from "react-native-mask-text";

// Imports | Data Contexts
import { useSelector, useDispatch } from 'react-redux';
import { update_set, selectSetById } from '../redux/features/workout/workoutSetsSlice';

// Create the SetInput Component - Deconstruct required props
const SetInput = ({ setId, exerciseType }) => {

    // Redux Config
    const dispatch = useDispatch();
    const set = useSelector((state) => selectSetById(state, setId));

    // State Management
    const [reps, setReps] = useState(set.reps ? set.reps.toString() : '');
    const [weight, setWeight] = useState(set.weight ? set.weight.toString() : '');
    const [duration, setDuration] = useState(set.duration ? set.duration : '');
    const [distance, setDistance] = useState(set.distance ? set.distance : '');
    const [isComplete, setIsComplete] = useState(set ? set.isComplete : false);

    const setComplete = () => {
        
        // Dispatch Changes
        dispatch(update_set({ id: setId, changes: { isComplete: !isComplete } }))
        setIsComplete(!isComplete)

    };

    console.log(set);
    // Render this on the Screen
    return ( 
        <>
        <View style={{flex:4, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {exerciseType === 'Cardio' 
            ?  
            <TextInput 
                style={styles.metricsInput} 
                maxLength={4} 
                disabled={isComplete}
                caretHidden
                keyboardType='numeric'
                mode='outlined' dense
                placeholder='km'
                selectTextOnFocus
                onChangeText={(text) => setDistance(text)}
                onBlur={() => dispatch(update_set({ id: setId, changes: { distance: distance } })) }
                value={distance}
            />
            :
            <TextInput 
                style={styles.metricsInput} 
                maxLength={4} 
                caretHidden
                disabled={isComplete}
                keyboardType='numeric'
                mode='outlined' dense
                placeholder='lbs'
                selectTextOnFocus
                onChangeText={(text) => setWeight(text)}
                onBlur={() => dispatch(update_set({ id: setId, changes: { weight: weight } })) }
                value={weight}
            />
        }
            {exerciseType === 'Strength' 
            ?
                <TextInput 
                    style={styles.metricsInput} 
                    maxLength={4} 
                    caretHidden 
                    disabled={isComplete}
                    keyboardType='numeric' 
                    mode='outlined' dense
                    placeholder='-'
                    selectTextOnFocus
                    onChangeText={(text) => setReps(text)}
                    onBlur={() => dispatch(update_set({ id: setId, changes: { reps: reps } })) }
                    value={reps}
                />
            :
                <TextInput 
                    style={styles.durationInput} 
                    maxLength={8} 
                    caretHidden 
                    disabled={isComplete}
                    keyboardType='numeric' 
                    mode='outlined' dense
                    placeholder='hh:mm:ss'
                    selectTextOnFocus
                    onChangeText={(text) => setDuration(text)}
                    onBlur={() => dispatch(update_set({ id: setId, changes: { duration: duration } })) }
                    value={duration}
                    defaultValue={duration}
                    render={props =>
                        <MaskedTextInput
                        {...props}
                        mask="99:99:99"
                        />
                    }
                />
            }
            </View>  
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <IconButton 
                    style={{}}
                    icon={set.isComplete ? 'checkbox' : 'square-outline'} 
                    color='green' 
                    size={20} 
                    onPress={() => setComplete() } 
                />    
            </View>   
        </>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    setInputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
          
    },
    metricsInput: {
        minWidth: 65,
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    durationInput: {
        minWidth: 95,
        textAlign: 'center',
        backgroundColor: 'transparent',
    }
});

// Export the SetInput for use in other files
export default SetInput;