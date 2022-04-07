/**
 *  Author:   Calvin May
 *  
 *  Date:     03/15/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: exerciseContext.js
 *  Description: ...
 */

// Imports | 3rd Party
import AsyncStorage from '@react-native-async-storage/async-storage';

// Imports | Data Contexts & API
import createDataContext from "./createDataContext";
import fitnessApi from '../api/fitnessApi';


// Reducer that handles Authentication State. 
//-It handles the different actions to be performed on the state
const exerciseReducer = (state, action) => {
    switch (action.type) {
        case 'get_exercises':
            return action.payload;
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

// Get All Exercises
 getExercises = dispatch => {
    return async () => {
        const response = await fitnessApi.get('/exercises');
        // response.data = [{blogPost}, {blogPost}, {blogPost}...]
        console.log(response.data);
        //dispatch({type: 'get_blogPosts', payload: response.data});
    }
};


// Export the functions allowing other files to take action on the state
//-and set default state
export const { Provider, Context } = createDataContext(
    // Use this Reducer
    exerciseReducer,                        
    {   // Action Functions for use in other Components
        getExercises
    },  
    []  
);