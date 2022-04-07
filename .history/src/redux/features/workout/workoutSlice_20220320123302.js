import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

const initialState = {

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













