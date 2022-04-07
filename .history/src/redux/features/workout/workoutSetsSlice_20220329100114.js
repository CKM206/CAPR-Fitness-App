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
    async (setToAdd, {fulfillWithValue, getState}) => {

        try {

            let currentNumberOfSets = await getState().workoutSets.ids.length;


            setToAdd._id = currentNumberOfSets;


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
        add_new_set: (state, action) => {

            // Get Fields from Payload
            const { reps, weight, duration, restTimer, isComplete } = action.payload;

            // Get Next ID
            const _id = state.ids.length; 

            // Create the Set
            workoutSetsAdapter.addOne(state, {_id, reps, weight, duration, restTimer, isComplete });
            
            console.log('My State: ', state);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addSetToExercise.fulfilled, (state, action) => {

            const { _id, reps, weight, duration, restTimer, isComplete } = action.payload;

            workoutSetsAdapter.addOne(state, {_id, reps, weight, duration, restTimer, isComplete });
            
        })
  },
})

// Export State Actions
export const { add_set, add_new_set } = workoutSetsSlice.actions;

// Export default selector
export const {
    selectAll: selectAllSets,
    selectById: selectSetById,
    selectIds: selectSetIds
} = workoutSetsAdapter.getSelectors(state => state.workoutSets);

export const selectSetsOfExercise = (state, props) => {
    const setsToReturn = state.workoutSets.ids.filter(element => props.sets.includes(element))
    return setsToReturn;
}

// Export the State Reducer
export default workoutSetsSlice.reducer;













