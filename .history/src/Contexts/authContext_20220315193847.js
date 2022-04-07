/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: authContext.js
 *  Description: Custom authentication Context/Provider for Managing Authentication State
 */

// Imports | React +
import React, {useEffect} from 'react';

// Imports | 3rd Party
import AsyncStorage from '@react-native-async-storage/async-storage';

// Imports | Data Contexts
import createDataContext from "./createDataContext";

// Imports | API
import fitnessApi from '../api/fitnessApi';

// Reducer that handles Authentication State. 
//-It handles the different actions to be performed on the state
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signIn':
            return { errorMessage: '', token: action.payload, isSignOut: false };   
        case 'clear_error_message':
            return { ...state, errorMessage: '' };   
        case 'signOut':
            return { ...state, token: null, errorMessage: '', isSignOut: true }; 
        case 'restore_token':
            return { ...state, token: action.payload, errorMessage: '', isLoading: false };          
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

/**
 *   Handles local sign in (Sign in without making a call to the API).
 * Tries to retrieve a JWT from local storage, if it does it logs the 
 * user in.
 */
const attemptLocalSignIn = dispatch => async () => {

    // Get the Token
    const token = await AsyncStorage.getItem('token');
    
    // Update the State with the stored token
    dispatch({ type: 'restore_token', payload: token});

};

// Change Authentication - Sign the User Up and Authenticate
const signup = (dispatch) => async ({ email, password }) => {
    try {
        // Make Api Request for signup
        const response = await fitnessApi.post('/signup', { email, password });

        // Retrieve the Token
        await AsyncStorage.setItem('token', response.data.token);

        // If signup is successful modify state, we are now authenticated
        dispatch({ type: 'signIn', payload: response.data.token});
    }
    // If signup fails, show an error message to the User
    catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with the Sign up.' });
    }

};

// Helper Function for Clearing Error Messages
const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

// Change Authentication - Log an existing User in and Authenticate
const signIn = (dispatch) => async ({email, password}) => {
    try {
        // Make Api Request for signIn
        const response = await fitnessApi.post('/signin', { email, password });

        // Save the Token to Async Storage
        await AsyncStorage.setItem('token', response.data.token);

        // If signin is successful modify state, we are now authenticated
        dispatch({ type: 'signIn', payload: response.data.token});
    }
    // If signIn fails, show an error message to the User
    catch(err) {
        dispatch({type: 'add_error', payload: 'Something went wrong when Signing in.'})
    }
};

// Change Authentication - Log the User out, De-Authenticate
const signOut = (dispatch) => async () => {
        
    // Remove the JWT from local storage to log the user out
    await AsyncStorage.removeItem('token')
    
    // Update the State
    dispatch({ type: 'signOut' });
};




// Export the functions allowing other files to take action on the state
//-and set default state
export const { Provider, Context } = createDataContext(
    // Use this Reducer
    authReducer,                        
    {   // Action Functions for use in other Components
        signIn, signOut, signup,          
        clearErrorMessage, attemptLocalSignIn 
    },  
      
    {   // Set Default State
        token: null, 
        errorMessage: '', 
        isLoading: true, 
        isSignOut: false 
    }   
);