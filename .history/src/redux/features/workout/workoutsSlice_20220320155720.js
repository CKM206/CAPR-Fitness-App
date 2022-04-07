import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutsAdapter = createEntityAdapter({
    selectId: (workout) => workout._id,

    sortComparer: (a, b) => a.timeFinished.localeCompare(b.timeFinished),
});

const initialState = workoutsAdapter.getInitialState({
    workouts: {},
    status: 'idle',
    error: null
});


// Create WorkoutSlice to handle Workout state
export const workoutsSlice = createSlice({


});

// Export State Actions
export const { } = workoutSlice.actions;

// Export default selector
export const selectWorkout = state => state.workout;

// Export the State Reducer
export default workoutsSlice.reducer;













