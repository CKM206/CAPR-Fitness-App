import { createAsyncThunk, nanoid, createSlice } from '@reduxjs/toolkit';
import fitnessApi from '../../../api/fitnessApi';

const initialState = {
    exercises: {}, 
    status: 'idle',
    error: null
};

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
            const response = await fitnessApi.post('/exercises', initialExercise);

            return response.data
        }
        catch(err) {
            console.log(err);
        }
    }
);


export const exercisesSlice = createSlice({

    name: 'exercises',
    initialState: initialState,
    reducers: {
        edit_exercise: (state, action) => {

            const {exercise} = action.payload;

            state.exercises[exercise.id] = exercise;
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExercises.pending, (state, action) => {
                state.status = 'loading'
                console.log('loading');
            })
            .addCase(fetchExercises.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log('succeed');
                state.exercises = action.payload
            })
            .addCase(fetchExercises.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })       
            .addCase(addExercise.pending, (state, action) => {
                state.status = 'loading'
                console.log('loading');
            })
            .addCase(addExercise.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log('succeed');
            })
            .addCase(addExercise.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            });
    },

});

export const { edit_exercise, get_exercise } = exercisesSlice.actions;

export const selectExercises = state => state.exercises.exercises;

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