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
        case 'add_exercises':
            const newExercises = state.exercises;

            action.payload.forEach(element => {
            let exercise = {name: element.name, exerciseType: element.exerciseType, muscles: element.muscles, force: element.force, _id: element._id}
                newExercises.exercise.push(exercise.exercise);
            });

            console.log(newExercises.exercise);

            return {...state, exercises: newExercises}
        case 'edit_title':
            return {...state, title: action.payload};
        case 'edit_note':  
        return {...state, note: action.payload};
        case 'edit_exercise':
            return state;
        case 'remove_exercise':  
            return state;
            case 'set_complete':
                return state;
        case 'set_pause':
            return {...state, isPause: action.payload};
        case 'complete_workout':
            return {...state, isComplete: action.payload}; 
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

 const addExercises = (dispatch) => {
    return async (arrayOfExercises) => {

        await dispatch({type: 'add_exercises', payload: arrayOfExercises});
        
    }
}

const changeTitle = (dispatch) => {
    return (title) => {
    // Update the Workout State
    dispatch({type: 'edit_title', payload: title});
    console.log(title);
    }
}

const changeNote = (dispatch) => {
    return (note) => {
    // Update the Workout State
    dispatch({type: 'edit_note', payload: note});
    }
};




// Export the functions allowing other files to take action on the state
//-and set default state
export const { Provider, Context } = createDataContext(
    // Use this Reducer
    workoutReducer,                        
    {   // Action Functions for use in other Components
        changeTitle, changeNote, addExercises
    },  
      
    {   // Set Default State
        title: 'Quick Workout',
        note: 'I am a note.',
        exercises: [{
            exercise: {
                name: 'Barbell Bench Press',
                exerciseType: 'Strength',
                muscles: ['Chest', 'Arms'],
                force: 'Push',
                _id: null,
            },
            rest: 180,
            sets: [{
                set: 1,
                reps: 5,
                weight: 155,
                duration: null,
                rest: null,
                isComplete: false,
            },
            {
                set: 2,
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
//             exercise: {
//                 name: null,
//                 exerciseType: null,
//                 muscles: [],
//                 force: 'null',
//                 exerciseId: null,
// },
//             rest: null,
//             sets: [{
//                 set:  null 
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