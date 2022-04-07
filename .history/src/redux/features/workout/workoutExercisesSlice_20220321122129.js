import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import fitnessApi from '../../../api/fitnessApi';
import { add_set, add_setToExercise } from '../workout/workoutSetsSlice';

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
                element.sets = [currentNumberOfSets];
                // Dispatch the Set
                dispatch(add_setToExercise({ _id: currentNumberOfSets }))

                startingIndex++;
                currentNumberOfSets++
            });
            
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
                    console.log('Exercise Added');
                    workoutExercisesAdapter.addMany(state, action.payload);
                    //console.log(state.entities);
                })
                .addCase(add_set, (state, action) => {
                    const { _id, exercise_id } = action.payload;

                    workoutExercisesAdapter.upsertOne(state, { exercise_id, sets: { _id } })
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













