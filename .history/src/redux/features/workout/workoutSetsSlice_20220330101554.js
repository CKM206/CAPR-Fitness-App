import { createAsyncThunk, nanoid, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutSetsAdapter = createEntityAdapter({
    selectId: (workoutSet) => workoutSet._id,
});


const initialState = workoutSetsAdapter.getInitialState({
    // workoutSets: {
    //     _id: null,
    //     setNum: 1,
    //     reps: 0,
    //     weight: 0,
    //     duration: 0,
    //     restTimer: 0,
    //     isComplete: false
    // }
});


// Create WorkoutSlice to handle Workout state
export const workoutSetsSlice = createSlice({
    name: 'workoutSets',
    initialState,
    reducers: {
        add_sets: {
            reducer: (state, action) => {
                //console.log(action.payload);
                workoutSetsAdapter.addMany(state, action.payload);
                console.log('State:', state);
            },
        },
        add_exercise_set: {
            reducer: (state, action) => {
                //console.log('I come to Sets First', action.payload);
            // Get Fields from Payload
            //const {_id, reps, setNum, weight, duration, restTimer, isComplete } = action.payload;

            // Create the Set
            workoutSetsAdapter.addOne(state, action.payload);
            console.log(state);
            },
            prepare: (set) => {
                // Generate an ID for this set
                const _id = nanoid();
                // Assign the new ID
                set._id = _id;
                // Return the new Payload with the ID
                return { payload: {set} };
            }
        }
    },
})

// Export State Actions
export const { add_sets, add_exercise_set } = workoutSetsSlice.actions;

// Export default selector
export const {
    selectAll: selectAllSets,
    selectById: selectSetById,
    selectIds: selectSetIds
} = workoutSetsAdapter.getSelectors(state => state.workoutSets);

// Custom Selector
export const selectSetsOfExercise = (state, props) => {
    const setsToReturn = state.workoutSets.ids.filter(element => props.sets.includes(element))
    return setsToReturn;
}

// Export the State Reducer
export default workoutSetsSlice.reducer;













