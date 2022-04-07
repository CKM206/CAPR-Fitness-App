import { createAsyncThunk, nanoid, createSlice } from '@reduxjs/toolkit';
import NavigationRef from '../../../../NavigationRef';
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

        console.log(response);
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
            // THIS IS WRONG, WE NEED TO SET AN 'isDefault: false' AND a USER ID
            //initialExercise.isDefault = false;
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
                //console.log('loading');
            })
            .addCase(fetchExercises.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //console.log('succeed');
                state.exercises = action.payload
            })
            .addCase(fetchExercises.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })       
            .addCase(addExercise.pending, (state, action) => {
                state.status = 'loading'
                //console.log('loading');
            })
            .addCase(addExercise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('succeeded');
                state.exercises.push(action.payload);

            })
            .addCase(addExercise.rejected, (state, action) => {
                state.status = 'failed'
                console.log('failed');
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