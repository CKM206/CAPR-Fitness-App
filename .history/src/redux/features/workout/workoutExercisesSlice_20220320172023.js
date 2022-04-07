import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import NavigationRef from '../../../../NavigationRef';
import fitnessApi from '../../../api/fitnessApi';


const workoutExercisesAdapter = createEntityAdapter({
    selectId: (workoutExercise) => workoutExercise._id,

    sortComparer: (a, b) => a._id.localeCompare(b._id),
});

const initialState = workoutExercisesAdapter.getInitialState({
    workoutExercises: {}
});

export const workoutExercises = createSlice({

    name: 'workoutExercises',
    initialState,
    reducers: {

    },
});

export const { } = workoutExercisesSlice.actions;

export const {
    selectAll: selectAllExercises,
    selectById: selectExerciseById,
    selectIds: selectExerciseIds
} = exercisesAdapter.getSelectors(state => state.workoutExercises);

export default exercisesSlice.reducer;

//workoutExercises