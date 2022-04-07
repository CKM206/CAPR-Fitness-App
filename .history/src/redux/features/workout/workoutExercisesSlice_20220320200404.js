import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';


export const addExercises = createAsyncThunk('workoutExercises/addExercises', 
async (exercisesToAdd, { getState }) => {

    
    try {

        //const dispatch = useDispatch();
        //const state = getState();

        let startingIndex = getState().workoutExercises;

        // exercisesToAdd.forEach(element => {
        //     element._id = startingIndex;
        //     startingIndex++;
        // });

        console.log(startingIndex);
        //console.log(exercisesToAdd);
        return exercisesToAdd;
    }
    catch(err) {
        console.log(err);
        // Explicitly Reject the promise to ensure we do not return
        //-a success and update the state
        return rejectWithValue(err.response.data)
    }
})

// Set the Initial State
const workoutExercisesAdapter = createEntityAdapter({
    selectId: (workoutExercise) => workoutExercise._id,

    //sortComparer: (a, b) => a._id.localeCompare(b._id),
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
        },
        extraReducers: (builder) => {
            builder
                .addCase(workoutExercises.fulfilled, (state, action) => {
                    console.log('Exercise Added');
                })
        }
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













