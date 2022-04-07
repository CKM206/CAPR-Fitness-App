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



// Export the functions allowing other files to take action on the state
//-and set default state
export const { Provider, Context } = createDataContext(
    // Use this Reducer
    workoutReducer,                        
    {   // Action Functions for use in other Components
        
    },  
      
    {   // Set Default State
        title: '',
        note: '',
        exercises: [{}],
        isPaused: true,
        isComplete: false,
        timer: 0,

        
    }   
);