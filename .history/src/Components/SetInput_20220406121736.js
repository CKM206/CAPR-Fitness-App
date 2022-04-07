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
    const [reps, setReps] = useState(set ? set.reps.toString() : '');
    const [weight, setWeight] = useState(set ? set.weight.toString() : '');
    const [isComplete, setIsComplete] = useState(set ? set.isComplete : false);

    const setComplete = () => {
        
        // Dispatch Changes
        dispatch(update_set({ id: setId, changes: { isComplete: !isComplete } }))
        setIsComplete(!isComplete)

    };

    // Render this on the Screen
    return ( 
        <>
        <View style={{flex:4, flexDirection: 'row', justifyContent: 'space-evenly', borderWidth: 1, alignItems: 'center'}}>  
            <TextInput 
                style={styles.metricsInput} 
                maxLength={4} 
                caretHidden
                keyboardType='numeric'
                mode='outlined' dense
                selectTextOnFocus
                onChangeText={(text) => setWeight(text)}
                onBlur={() => dispatch(update_set({ id: setId, changes: { weight: weight } })) }
                value={weight}
            />
            {exerciseType === 'Strength' 
            ?
                <TextInput 
                    style={styles.metricsInput} 
                    maxLength={4} 
                    caretHidden 
                    keyboardType='numeric' 
                    mode='outlined' dense
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
                    keyboardType='numeric' 
                    mode='outlined' dense
                    selectTextOnFocus
                    onChangeText={(text) => setReps(text)}
                    onBlur={() => dispatch(update_set({ id: setId, changes: { reps: reps } })) }
                    value={reps}
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
        backgroundColor: 'transparent',
    },
    durationInput: {
        minWidth: 95,
        backgroundColor: 'transparent',
    }
});

// Export the SetInput for use in other files
export default SetInput;