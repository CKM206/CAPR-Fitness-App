import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const initialState = createEntityAdapter({
    selectId: (workout) => workout._id,

    sortComparer: (a, b) => a.timeFinished
});


// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({


});

// Export State Actions
export const { } = workoutSlice.actions;

// Export default selector
export const selectWorkout = state => state.workout;

// Export the State Reducer
export default workoutSlice.reducer;













