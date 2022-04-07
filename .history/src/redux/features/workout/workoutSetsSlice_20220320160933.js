import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const setsAdapter = createEntityAdapter({
    selectId: (workout) => workout._id,

    sortComparer: (a, b) => a._id.localeCompare(b._id),
});

const initialState = workoutsAdapter.getInitialState({
    workouts: {},
    status: 'idle',
    error: null
});


// Create WorkoutSlice to handle Workout state
export const workoutsSlice = createSlice({
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
} = exercisesAdapter.getSelectors(state => state.exercises);

// Export the State Reducer
export default workoutsSlice.reducer;













