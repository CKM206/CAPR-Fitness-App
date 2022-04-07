import { createAsyncThunk, nanoid, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';
//import { addExercises } from './workoutExercisesSlice';

// Set the Initial State
const workoutSetsAdapter = createEntityAdapter({
    selectId: (workoutSet) => workoutSet._id,

    //sortComparer: (a, b) => a._id.localeCompare(b._id),
});



const initialState = workoutSetsAdapter.getInitialState({
    workoutSets: {
        _id: null,
        reps: 0,
        weight: 0,
        duration: 0,
        restTimer: 0,
        isComplete: false
    },
});


export const addSetToExercise = createAsyncThunk('workoutSets/addSetToExercise',
    async (setToAdd, {fulfillWithValue}) => {

        try {

            return fulfillWithValue(setToAdd);

        }
        catch (err) {
            console.log(err);
            // Explicitly Reject the promise to ensure we do not return
            //-a success and update the state
            return rejectWithValue(err.response.data)
        }
})


// Create WorkoutSlice to handle Workout state
export const workoutSetsSlice = createSlice({
    name: 'workoutSets',
    initialState,
    reducers: {
        add_set: {
            reducer: (state, action) => {
                console.log(action.payload);
                workoutSetsAdapter.addOne(state, action.payload);
            },
            // prepare: (state, set) => {
            //     console.log(state.entities)
            //     const _id = nanoid();
            //     console.log('Adding ID')
            //     return { payload: { _id, set } }
            // }
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(addSetToExercise.fulfilled, (state, action) => {

            const { _id, reps, weight, duration, restTimer, isComplete } = action.payload;

            workoutSetsAdapter.addOne(state, {_id, reps, weight, duration, restTimer, isComplete });
            console.log('Adding Set to Exercise');
            console.log(state.ids, state.entities)
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












