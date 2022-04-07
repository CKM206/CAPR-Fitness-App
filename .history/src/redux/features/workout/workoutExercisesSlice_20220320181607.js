import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutExercisesAdapter = createEntityAdapter({
    selectId: (workoutExercise) => workoutExercise.id,

    sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = workoutExercisesAdapter.getInitialState({
    workoutExercises: {},
});


// Create WorkoutSlice to handle Workout state
export const workoutExercisesSlice = createSlice({
    name: 'workoutExercises',
    initialState,
    reducers: {
        add_exercises: (state, action) => {
            workoutExercisesAdapter.addMany(state, action.payload);
        }
    }

});

// Export State Actions
export const { add_exercises } = workoutExercisesSlice.actions;

// Export default selector
export const {
    selectAll: selectAllExercises,
    selectById: selectExerciseById,
    selectIds: selectExerciseIds
} = workoutExercisesAdapter.getSelectors(state => state.workoutExercises);

// Export the State Reducer
export default workoutExercisesSlice.reducer;













