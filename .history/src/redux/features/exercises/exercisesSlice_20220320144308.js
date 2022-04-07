import { createAsyncThunk, nanoid, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import NavigationRef from '../../../../NavigationRef';
import fitnessApi from '../../../api/fitnessApi';

const exercisesAdapter = createEntityAdapter({
    selectId: (exercise) => exercise._id,

    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = exercisesAdapter.getInitialState({
    exercises: {}, 
    status: 'idle',
    error: null
});

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async () => {
    console.log('Inside Thunk');
    try {
        const response = await fitnessApi.get('/exercises');
        
        return response.data;

    }
    catch(err) {

    }
});

export const addExercise = createAsyncThunk(
    'exercises/addExercise',
    async initialExercise => {
        try
        {
            console.log(initialExercise);
            
            const response = await fitnessApi.post('/exercises', initialExercise);

            return response.data
        }
        // Check for some sort of error during the Request to the API
        catch(err) {
            console.log(err);
            // Explicitly Reject the promise to ensure we do not return
            //-a success and update the state
            return rejectWithValue(err.response.data)
        }
    }
);


export const exercisesSlice = createSlice({

    name: 'exercises',
    initialState,
    reducers: {
        edit_exercise: (state, action) => {

            const {exercise} = action.payload;

            state.entities[exercise.id] = exercise;
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExercises.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchExercises.fulfilled, exercisesAdapter.setAll
            )
            .addCase(fetchExercises.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })       
            .addCase(addExercise.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addExercise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                exercisesAdapter.addOne;

            })
            .addCase(addExercise.rejected, (state, action) => {
                state.status = 'failed'
                console.log('failed');
                state.error = action.error.message
            });
    },

});

export const { edit_exercise, get_exercise } = exercisesSlice.actions;

export const {
    selectAll: selectAllExercises,
    selectById: selectExerciseById,
    selectIds: selectExerciseIds
} = exercisesAdapter.getSelectors(state => state.exercises);

export default exercisesSlice.reducer;

/* 

    id: 
    name: 
    exerciseType: 
    force: 
    equipment: 
    isDefault: 
*/


// Workout

    // Exercises


        //Sets