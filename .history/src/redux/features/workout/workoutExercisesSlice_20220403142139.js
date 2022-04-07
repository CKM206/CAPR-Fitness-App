import { createAsyncThunk, nanoid, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import fitnessApi from '../../../api/fitnessApi';
import { add_sets, add_exercise_set, remove_exercise_set } from '../workout/workoutSetsSlice';

// Set the Initial State
const workoutExercisesAdapter = createEntityAdapter({
    selectId: (workoutExercise) => workoutExercise._id,

    //sortComparer: (a, b) => a._id.localeCompare(b._id),
});

const initialState = workoutExercisesAdapter.getInitialState({
    workoutExercises: {},
});

export const addExercises = createAsyncThunk('workoutExercises/addExercises', 
    async (exercisesToAdd, { getState, fulfillWithValue, dispatch }) => {
    
        try {
            let setsToAdd = [];

            await exercisesToAdd.forEach(element => {
                // Create the initial Set ID
                const setID = nanoid();
                // Set the ID for this workout exercise
                element._id = nanoid();
                // Set the initial Set ID
                element.sets = [setID];     
                // Build Set Objects
                setsToAdd.push({ _id: setID, setNum: 1, reps: 0, duration: 0, restTimer: 0, isComplete: false });
            });

            // Dispatch the Sets
            //console.log('Sets to be Added: ', setsToAdd);
            dispatch(add_sets(setsToAdd));

            return fulfillWithValue(exercisesToAdd);
        }
        catch (err) {
            console.log(err);
            // Explicitly Reject the promise to ensure we do not return
            //-a success and update the state
            return rejectWithValue(err.response.data)
        }
});

export const removeExercise = createAsyncThunk('workoutExercises/removeExercise',
    async (exerciseId, { fulfillWithValue, dispatch }) => {

        try {

            // Determine Sets to Delete

            // Delete the Sets

            
            console.log('Removing Exercise...')

            return exerciseId;
        }
        catch (err) {
            console.log(err);
            // Explicitly Reject the promise to ensure we do not return
            //-a success and update the state
            return rejectWithValue(err.response.data)
        }


    });


// Create WorkoutSlice to handle Workout state
export const workoutExercisesSlice = createSlice({
    name: 'workoutExercises',
    initialState,
    reducers: {
        add_exercises: (state, action) => {
                console.log('Payload', action.payload);
                workoutExercisesAdapter.addMany(state, action.payload);
            },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addExercises.fulfilled, (state, action) => {
                workoutExercisesAdapter.addMany(state, action.payload);
            })
            .addCase(removeExercise.fulfilled, (state, action) => {
                console.log('Exercise Being Removed: ', action.payload)
                //workoutExercisesAdapter.removeOne(state, action);
            })
            .addCase(add_exercise_set, (state, action) => {
                const { _id, exercise_id } = action.payload;
                state.entities[exercise_id].sets.push(_id);

            })
            .addCase(remove_exercise_set, (state, action) => {
                const { _id, exercise_id } = action.payload;
                // Get the Index
                const index = state.entities[exercise_id].sets.indexOf(_id);
                // Remove the Element
                state.entities[exercise_id].sets.splice(index, 1);
            })         
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













