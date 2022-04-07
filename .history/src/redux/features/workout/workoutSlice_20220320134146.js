import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const initialState = {
    title: 'Quick Workout',
        note: 'I am a note.',
        exercises: [{
            exercise: {
                name: 'Barbell Bench Press',
                exerciseType: 'Strenght',
                muscles: ['Chest', 'Arms'],
                force: 'Push',
                _id: '6214030435177078991cb0d4',
            },
            rest: 0,
            sets: [{
                set: 1,
                reps: 5,
                weight: 135,
                duration: 0,
                rest: 120,
                isComplete: false,
            }
            ]
        }],
        isPaused: true,
        isComplete: false,
        timer: 0, 
};


// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({


});

// Export State Actions
export const { } = workoutSlice.actions;

// Export default selector
export const selectWorkout = state => state.workout;

// Export the State Reducer
export default workoutSlice.reducer;













