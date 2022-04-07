

import React, {useEffect} from 'react';
import createDataContext from "./createDataContext";
import fitnessApi from '../api/fitnessApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../../NavigationRef";    // Import our navigation helper

// Here we will handle the different actions to be performed on the state
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


// Action Functions

const attemptLocalSignIn = dispatch => async () => {


    // Try to retrieve a token from async storage
    try {

        const token = await AsyncStorage.getItem('token');
        dispatch({ type: 'restore_token', payload: token});
    }
    catch (err){

    }
    //console.log(token);

    // Check if token is null or not
    //if (token) {
        //dispatch({ type: 'restore_token', payload: token});
        //navigate('TrackList');
    //}
    // Not stricly necessary, as the app will automatically go to the singin screen
    //-but we're being strict
    //else {
        //navigate('SignIn');
    //}
};

// Change Authentication - Sign the User Up and Authenticate
const signup = (dispatch) => async ({ email, password }) => {
    try{
        // Make Api Request for signup
        const response = await fitnessApi.post('/signup', { email, password });
        // Retrieve the Token
        await AsyncStorage.setItem('token', response.data.token);
        // If signup is successful modify state, we are now authenticated
        //-Sign in the User
        dispatch({ type: 'signIn', payload: response.data.token});
        // Navigate to mainFlow-TrackList - THIS USES OUR CUSTOM NAVIGATIONREF FILE
        //navigate('MainDrawerNavigator', { screen: 'Home' });
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
        //-Sign in the User
        dispatch({ type: 'signIn', payload: response.data.token});
        console.log(response.data.token);
        // Navigate to mainFlow-TrackList - THIS USES OUR CUSTOM NAVIGATIONREF FILE
        //navigate('HomeStack', { screen: 'Home' });
    }
    // If signIn fails, show an error message to the User
    catch(err) {
        dispatch({type: 'add_error', payload: 'Something went wrong when Signing in.'})
    }
    };

// Change Authentication - Log the User out, De-Authenticate
const signOut = (dispatch) => async () => {
        
        await AsyncStorage.removeItem('token')

        // If signOut is successful modify state, we are now authenticated
        dispatch({ type: 'signOut' });
        // If signOut fails, show an error message to the User
    };




// Export the functions allowing other files to take action on the state
//-and set default state
export const { Provider, Context } = createDataContext(
    authReducer,                        // The reducer we're using to handle state
    { signIn, signOut, signup,          // All the functions for handling actions performed on the state
      clearErrorMessage, attemptLocalSignIn },  
    { token: null, errorMessage: '', isLoading: true, isSignOut: false }   // Default State
);