import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutAdapter = createEntityAdapter({
    selectId: (workout) => workout._id,

    sortComparer: (a, b) => a.timeFinished.localeCompare(b.timeFinished),
});

const initialState = workoutAdapter.getInitialState({
    workouts: {},
    status: 'idle',
    error: null
});


// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {

    }

});

// Export State Actions
export const { } = workoutSlice.actions;

// Export default selector
export const {
    selectAll: selectAllExercises,
    selectById: selectExerciseById,
    selectIds: selectExerciseIds
} = workoutAdapter.getSelectors(state => state.exercises);

// Export the State Reducer
export default workoutSlice.reducer;













