import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import fitnessApi from '../../../api/fitnessApi';
import { add_sets, add_exercise_set } from '../workout/workoutSetsSlice';

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

            let startingIndex = await getState().workoutExercises.ids.length;
            let currentNumberOfSets = await getState().workoutSets.ids.length;
            let setsToAdd = [];

            await exercisesToAdd.forEach(element => {
                // Set the Id using the starting Index
                element._id = startingIndex;
                element.sets = [currentNumberOfSets];

                // Build Set Objects
                setsToAdd.push({ _id: currentNumberOfSets, setNum: 1, reps: 0, duration: 0, restTimer: 0, isComplete: false });

                startingIndex++;
                currentNumberOfSets++
            });

            // Dispatch the Sets
            console.log('Sets to be Added: ', setsToAdd);
            dispatch(add_sets(setsToAdd));
            
            // dispatch(add_exercises(exercisesToAdd));
            // console.log(exercisesToAdd);
            return fulfillWithValue(exercisesToAdd);
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
            workoutExercisesAdapter.addMany(state, action.payload);
        },
    },
        extraReducers: (builder) => {
            builder
                .addCase(addExercises.fulfilled, (state, action) => {
                    //console.log('Exercise Added');
                    workoutExercisesAdapter.addMany(state, action.payload);
                    //console.log(state.entities);
                })
                .addCase(add_exercise_set, (state, action) => {
                    const { _id, exercise_id } = action.payload;

                    state.entities[exercise_id].sets.push(_id);

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













