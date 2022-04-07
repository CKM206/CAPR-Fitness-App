import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fitnessApi from '../api/fitnessApi';

const initialState = {};

export const getExercises = createAsyncThunk(

    async () => {
        try
        {
            // Make a Request to the API
            const response = await fitnessApi.get('/exercises');
            
            // Sort the Exercises
            const exerciseList = response.data.sort((a, b) => a.name > b.name ? 1 : -1);

            // Update the ExerciseList State
            dispatch({type: 'get_exercises', payload: exerciseList});
        }
        catch(err) {
            console.log(err);
        }
    }
);


export const exercisesSlice = createSlice({

    name: 'exercises',
    initialState: initialState,
    reducers: {
        edit_exercise: (state, action) => {

            const {exercise} = action.payload;

            return exercises[exercise.id] = exercise;
            
        },
        get_exercise: (state, action) => {
            return action.payload;
        }
    }


});

export const { edit_exercise, get_exercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;

/* 

    id: 
    name: 
    exerciseType: 
    force: 
    equipment: 
    isDefault: 
*/


// Workout

    // Exercises


        //Sets