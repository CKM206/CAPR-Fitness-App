import { createSlice } from '@reduxjs/toolkit';

export const exercisesSlice = createSlice({

    name: 'exercises',
    initialState: {},
    reducers: {
        edit_exercise: (state, action) => {

            const {exercise} = action.payload;

            exercises[exercise.id] = exercise;
            
        },
        get_exercise: (state, action) => {
            return action.payload;
        }
    }


});

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