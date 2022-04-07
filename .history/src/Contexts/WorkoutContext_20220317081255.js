/**
 *  Author:   Calvin May
 *  
 *  Date:     03/17/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutContext.js
 *  Description: Handles State for Workouts!
 */

// Imports | 3rd Party
import AsyncStorage from '@react-native-async-storage/async-storage';

// Imports | Data Contexts & API
import createDataContext from "./createDataContext";
import fitnessApi from '../api/fitnessApi';


// Reducer that handles Authentication State. 
//-It handles the different actions to be performed on the state
const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'edit_title':
            return state;
        case 'edit_note':  
            return state;  
        case 'edit_exercise':
            return state;
        case 'remove_exercise':  
            return state;
        case 'set_pause':
            return state;
        case 'set_complete':
            return state;
        case 'cancel':
            return state;      
        default:
            return state;
    }
};


/**
 * Action Functions
 * 
 *   When a specific action is to be performed on the state, one of these functions will be called.
 * These functions perform some logic, like making a request to an API, and then dispatch an
 * action to the authReducer, which updates the state.
 */
export const changeTitle = (dispatch) => {
    return (title) => {
    //console.log("Title Context Updated: " + title);
    }
}

export const changeNote = (dispatch) => {
    return (note) => {
    //console.log("Note Context Updated: " + note);
    }
}


// Export the functions allowing other files to take action on the state
//-and set default state
export const { Provider, Context } = createDataContext(
    // Use this Reducer
    workoutReducer,                        
    {   // Action Functions for use in other Components
        changeTitle, changeNote
    },  
      
    {   // Set Default State
        title: 'Quick Workout',
        note: 'I am a note.',
        exercises: [{
            exercise: 'Barbell BenchPress',
            rest: 180,
            sets: [{
                reps: 5,
                weight: 155,
                duration: null,
                rest: null,
                isComplete: false,
            }]
        }],
        isPaused: true,
        isComplete: false,
        timer: null,  
    }   
);

//         title: '',
//         note: '',
//         exercises: [{
//             exercise: '',
//             rest: null,
//             sets: [{
//                 reps: null,
//                 weight: null,
//                 duration: null,
//                 rest: null,
//                 isComplete: null,
//             }]
//         }],
//         isPaused: true,
//         isComplete: false,
//         timer: null,