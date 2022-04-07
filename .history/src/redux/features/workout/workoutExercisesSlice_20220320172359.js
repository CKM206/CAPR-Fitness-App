import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutExercisesAdapter = createEntityAdapter({
    selectId: (workoutSet) => workoutSet._id,

    sortComparer: (a, b) => a._id.localeCompare(b._id),
});

const initialState = workoutsAdapter.getInitialState({
    workoutExercises: {},
});


// Create WorkoutSlice to handle Workout state
export const workoutExercisesSlice = createSlice({
    name: 'workoutExercises',
    initialState,
    reducers: {
        
    }

});

// Export State Actions
export const { } = workoutExercisesSlice.actions;

// Export default selector
export const {
    selectAll: selectAllExercises,
    selectById: selectSetById,
    selectIds: selectSetIds
} = workoutExercisesAdapter.getSelectors(state => state.workoutExercises);

// Export the State Reducer
export default workoutExercisesSlice.reducer;













