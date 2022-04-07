import { createSlice } from '@reduxjs/toolkit';

export const exercisesSlice = createSlice({

    name: 'exercises',
    initialState: {},
    reducers: {
        edit_exercise: (state, action) => {
            return state.map((exercise) => {
                return exercise._id === action.payload._id
                ? action.payload: 
                exercise;
            });
        },
        get_exercise: (state, action) => {
            return action.payload;
        }
    }


});


// Workout

    // Exercises


        //Sets