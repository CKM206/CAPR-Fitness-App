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
import * as NavigationRef from '../../NavigationRef';


// Reducer that handles Authentication State. 
//-It handles the different actions to be performed on the state
const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'add_exercise':
            const newExercises = state.exercises;

            let newExercise= {   // Set Default State
                    exercise: {
                    name: action.payload.name,
                    exerciseType: action.payload.exerciseType,
                    muscles: action.payload.muscles,
                    force: action.payload.force,
                    _id: action.payload._id,
                    },
                    
                }

                newExercises.push(newExercise);
                

                
                // Check to see if this is the first Exercise being added
                if (state.exercises[0].exercise._id === null)
                {
                    // remove the Initial State
                    newExercises.splice(0, 1);
                }
                // console.log('FIRST EXERCISE');
                // console.log(newExercises);
                // console.log('FIRST EXERCISE');

            return {...state, exercise: newExercises};
        case 'add_set':

            const exerciseForSet = state.exercises.filter(exercise => exercise._id === action.payload._id);
            //const newSets = exerciseForSet.sets;

            console.log(exerciseForSet.sets);

                //const setNumber = 1

            if (typeof exerciseForSet.sets != 'undefined')
            {
                console.log(true);
            }
            //  const newSet = {
            //     set: typeof exerciseForSet.sets[0] == 'undefined' ?  1 : exerciseForSet.sets.length() + 1,
            //     reps: 0,
            //     weight: 0,
            //     duration: 0,
            //     rest: 0,
            //     isComplete: false,
            // };
                
            // exerciseForSet.sets.push(newSet);

            // if (exerciseForSet.sets[0].num === 0)
            // {
            //     newSets.splice(0, 1);
            // }
            
            //  return {...state, sets: newSets};
            //return {...state, sets: []};    
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

        await arrayOfExercises.forEach(element => {
            console.log(element);
            dispatch({type: 'add_exercise', payload: element});
        });
        NavigationRef.navigate('WorkoutStack', {screen: 'WorkoutDetaul', props: {exercise: null}})
        
    }
};

const addSet = (dispatch) => {
    return async (_id) => {

        dispatch({type: 'add_set', payload: _id});
        console.log(_id);

    }
}

const changeTitle = (dispatch) => {
    return (title) => {
    // Update the Workout State
    dispatch({type: 'edit_title', payload: title});
    console.log(title);
    }
};

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
        changeTitle, changeNote, addExercises, addSet
    },  
      
    {   // Set Default State
        title: 'Quick Workout',
        note: 'I am a note.',
        exercises: [{
            exercise: {
                name: null,
                exerciseType: null,
                muscles: [],
                force: null,
                _id: null,
            },
            rest: 0,
            sets: [{
                set: 0,
                reps: 0,
                weight: 0,
                duration: 0,
                rest: 0,
                isComplete: false,
            }
            ]
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