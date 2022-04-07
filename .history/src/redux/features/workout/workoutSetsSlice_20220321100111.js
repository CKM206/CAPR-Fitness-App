import { createAsyncThunk, nanoid, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';
import { addExercises } from './workoutExercisesSlice';

// Set the Initial State
const workoutSetsAdapter = createEntityAdapter({
    selectId: (workoutSet) => workoutSet._id,

    sortComparer: (a, b) => a._id.localeCompare(b._id),
});

const initialState = workoutSetsAdapter.getInitialState({
    workoutSets: {},
});

// Create WorkoutSlice to handle Workout state
export const workoutSetsSlice = createSlice({
    name: 'workoutSets',
    initialState,
    reducers: {
        add_set: {
            reducer: (state, action) => {
                //const newId = state.entities.length
                console.log(action.payload);
                workoutSetsAdapter.addOne(state, action.payload);
            },
            prepare: (set) => {
                const _id = nanoid();
                console.log('Adding ID')
                return { payload: { _id, set } }
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addExercises.fulfilled, (state, actions) => {
            console.log('Made it to Sets Reducer');
            console.log(actions.payload);
            workoutSetsAdapter.addMany(state, { exercise_id: action.payload })
            console.log('End of Payload');
        })
  },
})

// Export State Actions
export const { add_set } = workoutSetsSlice.actions;

// Export default selector
export const {
    selectAll: selectAllSets,
    selectById: selectSetById,
    selectIds: selectSetIds
} = workoutSetsAdapter.getSelectors(state => state.workoutSets);

// Export the State Reducer
export default workoutSetsSlice.reducer;













