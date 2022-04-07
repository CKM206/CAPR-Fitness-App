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
import { Caption, TextInput, IconButton, Snackbar, Portal, Subheading } from 'react-native-paper';

// Imports | Components 
import { MaskedTextInput } from "react-native-mask-text";
import { TextInputMask } from 'react-native-masked-text';

// Imports | Data Contexts
import { useSelector, useDispatch } from 'react-redux';
import { update_set, selectSetById } from '../redux/features/workout/workoutSetsSlice';



const correctDuration = (setId, durationString, dispatch, setDuration) => {

    // Genereate array via splitting
        if (durationString != '')
        {
        const timeArray = durationString.split(':');

        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if(timeArray.length === 3)
        {
            hours = parseInt(timeArray[0]);
            minutes = parseInt(timeArray[1]);
            seconds = parseInt(timeArray[2])
        }
        else 
        {
            minutes = parseInt(timeArray[0]);
            seconds = parseInt(timeArray[1])
        }


        if (minutes >= 60)
        {
            let additionalHours = Math.floor((minutes/60));
            let leftoverMinutes = minutes % 60;
            hours = hours + additionalHours
            minutes = leftoverMinutes;
        }

        if (seconds >= 60)
        {
            let additionalMinutes = Math.floor((seconds/60));
            let leftoverSeconds = seconds % 60;

            minutes += additionalMinutes;
            seconds = leftoverSeconds;

        }

        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');


        dispatch(update_set({ id: setId, changes: { duration: `${hours}:${minutes}:${seconds}` } }))
}
}

const transformNumber = (newValue, setDuration, duration) => {

    newValue.length === 1 ? newValue = `0:0${newValue}` : null

    if (newValue.length === 5 && newValue.includes('0:0'))
    {
        newValue = newValue.replace(/0:0/g, '');
        newValue = `0:${newValue}`

    }

    if (newValue.length === 5)
    {
        if (newValue.includes('0:'))
        {
            newValue = newValue.replace(/0:/g, '');
            newValue = [newValue.slice(0, 1), ':', newValue.slice(1)].join('');

        }
        else
        {
            newValue = newValue.replace(/:/g, '');
            newValue = [newValue.slice(0, 2), ':', newValue.slice(2)].join('');

        }
    }

    if (newValue.length === 6 && duration.length === 5)
    {
        newValue = newValue.replace(/:/g, '');
        newValue = [newValue.slice(0, 1), ':', newValue.slice(1)].join('');
        newValue = [newValue.slice(0, 4), ':', newValue.slice(4)].join('');
    }

    if (newValue.length === 6 && duration.length === 7)
    {
        newValue = newValue.replace(/:/g, '');
        newValue = [newValue.slice(0, 2), ':', newValue.slice(2)].join('');
    }

    if (newValue.length === 4 && duration.length === 5)
    {
        newValue = newValue.replace(/:/g, '');
        newValue = [newValue.slice(0, 1), ':', newValue.slice(1)].join('');
    }

    if (newValue.length === 3 && duration.length === 4)
    {
        if (newValue.includes('0:0'))
        {
            newValue = newValue.replace(/0:/g, '');
            newValue = '';

        }
        else{
            newValue = newValue.replace(/:/g, '');
            newValue = [newValue.slice(0, 0), '0:', newValue.slice(0)].join('');
        }
    }

    if (newValue.length <= 7)
        setDuration(newValue)
}


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
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const attemptComplete = () => {
        
        let canComplete = true;
        switch(exerciseType){
            case 'Strength':
                if (weight === '' || reps === '')
                    canComplete = false;
                break;
            case 'Timed':
                if (duration === '' || weight === '')
                    canComplete = false;
                break;
            case 'Cardio':
                if (duration === '' || distance === '')
                    canComplete = false;
                break;
            default:
                return null;
        }
        if (canComplete)
        {
            // Dispatch Changes
            dispatch(update_set({ id: setId, changes: { isComplete: !isComplete } }))
            setIsComplete(!isComplete)
        }
        else
        {
            onToggleSnackBar();
        }
    };
    
    console.log('SET INPUT RENDERING');
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
                    maxLength={7} 
                    caretHidden 
                    disabled={isComplete}
                    keyboardType='numeric' 
                    mode='outlined' dense
                    placeholder='h:mm:ss'
                    selectTextOnFocus
                    onChangeText={(text) => transformNumber(text, setDuration, duration)}
                    onBlur={() => correctDuration(setId, duration, dispatch, setDuration) }
                    value={duration}
                    defaultValue={duration}
                />
            }
            </View>  
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <IconButton 
                    style={{}}
                    icon={set.isComplete ? 'checkbox' : 'square-outline'} 
                    color='green' 
                    size={20} 
                    onPress={() => attemptComplete() } 
                />    
            </View>  
            <Portal>
                <Snackbar
                    style={styles.snackbar}
                    wrapperStyle={styles.snackBarWrapper}
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    duration={3000}
                >
                    <Subheading>Please log the Set Information</Subheading>
                </Snackbar>
            </Portal>
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
    },
    snackbar: {
        position: 'absolute',
        margin: 10,
        bottom: 5,
        right: 5,
        opacity: 20,
        color: 'red',
        backgroundColor:'white',
    },
    snackBarWrapper: {
        textDecorationColor: 'orange',
        opacity: 20,
        color:'white',
    }
});

// Export the SetInput for use in other files
export default SetInput;