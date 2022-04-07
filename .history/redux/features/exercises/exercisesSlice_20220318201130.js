import { createSlice } from '@reduxjs/toolkit';

export const exercisesSlice = createSlice({

    name: 'exercises',
    initialState: {},
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