import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import fitnessApi from '../../../api/fitnessApi';
import { add_set } from '../workout/workoutSetsSlice';

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

        //const dispatch = useDispatch();
        //const state = getState();

        let startingIndex = await getState().workoutExercises.ids.length;
        let currentNumberOfSets = await getState().workoutSets.ids.length;

        await exercisesToAdd.forEach(element => {
            // Set the Id using the starting Index
            element._id = startingIndex;
            // Set the set Id
            element.sets = {
                id: currentNumberOfSets,
            };
            // Dispatch the Set
            //dispatch(add_set({ _id: currentNumberOfSets, reps: 0, sets: 0, weight: 0, duration: 0, restTimer: 0, isComplete: false }))

            startingIndex++;
            currentNumberOfSets++
        });
        
        // dispatch(add_exercises(exercisesToAdd));
        // console.log(exercisesToAdd);
        return fulfillWithValue(exercisesToAdd);
    }
    catch(err) {
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
            workoutExercisesAdapter.addMany(state, action.payload);
        },
    },
        extraReducers: (builder) => {
            builder
                .addCase(addExercises.fulfilled, (state, action) => {
                    console.log('Exercise Added');
                    workoutExercisesAdapter.addMany(state, action.payload);
                    //console.log(state.entities);
                })
        
    }

});

// Export State Actions
export const {  } = workoutExercisesSlice.actions;

// Export default selector
export const {
    selectAll: selectAllExercises,
    selectById: selectExerciseById,
    selectIds: selectExerciseIds
} = workoutExercisesAdapter.getSelectors(state => state.workoutExercises);


// Export the State Reducer
export default workoutExercisesSlice.reducer;













