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

export const getExercises = createAsyncThunk(
    async () => {
        try
        {
            console.log('Inside Thunk');
            // Make a Request to the API
            const response = await fitnessApi.get('/exercises');
            
            console.log('response');
            // Sort the Exercises
            return response.data.sort((a, b) => a.name > b.name ? 1 : -1);

            // Update the ExerciseList State
            //return exerciseList;
        }
        catch(err) {
            console.log(err);
        }
    }
);

export const addExercise = createAsyncThunk(

    async (name, exerciseType, muscles, force, equipment) => {
        try
        {
            exercise = {
                name: name,
                exerciseType: exerciseType,
                muscles: muscles,
                force: force,
                equipment: equipment,
                isDefault: true,
            };

            const response = await fitnessApi.post('/exercises', exercise);

            //NavigationRef.navigate('ExerciseList', {name});
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
                console.log('loading');
                state.status = 'loading'
            })
            .addCase(fetchExercises.fulfilled, (state, action) => {
                console.log('succeed');
                state.status = 'succeeded'
                state.exercises = action.payload
            })
            .addCase(fetchExercises.rejected, (state, action) => {
                console.log('failed');
                state.status = 'failed'
                state.error = action.error.message
            })
            
            .addCase(addExercise.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addExercise.fulfilled, (state, action) => {
                state.status = 'idle';
                //NavigationRef.navigate('ExerciseList', {name});
            })
            .addCase(getExercises.pending, (state) => {
                state.status = 'loading';
                console.log('GOT HERE!!!');
            })
            .addCase(getExercises.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const {exercises} = action.payload;
                console.log('GOT HERE!!!');
            state.exercises = action.payload;
            });
    }

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