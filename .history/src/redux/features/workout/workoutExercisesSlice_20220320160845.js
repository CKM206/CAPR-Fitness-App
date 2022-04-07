import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutExercisesAdapter = createEntityAdapter({
    selectId: (workout) => workout._id,

    sortComparer: (a, b) => a.timeFinished.localeCompare(b.timeFinished),
});

const initialState = workoutExercisesAdapter.getInitialState({
    workouts: {},
    status: 'idle',
    error: null
});


// Create WorkoutSlice to handle Workout state
export const workoutExercisesSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {
        
    }

});

// Export State Actions
export const { } = workoutExercises.actions;

// Export default selector
export const {
    selectAll: selectAllExercises,
    selectById: selectExerciseById,
    selectIds: selectExerciseIds
} = workoutExercisesAdapter.getSelectors(state => state.exercises);

// Export the State Reducer
export default workoutExercisesSlice.reducer;













