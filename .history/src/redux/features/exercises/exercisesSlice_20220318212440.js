import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fitnessApi from '../../../api/fitnessApi';

const initialState = {
    exercises: {}, 
    status: 'idle'
};

export const getExercises = createAsyncThunk(

    async () => {
        try
        {
            // Make a Request to the API
            const response = await fitnessApi.get('/exercises');
            
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
        get_exercise: (state, action) => {
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addExercise.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addExercise.fulfilled, (state, action) => {
                state.status = 'idle';
                //NavigationRef.navigate('ExerciseList', {name});
            })
            .addCase(getExercises.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getExercises.fulfilled, (state, action) => {
                state.status = 'idle';
                const {exercises} = action.payload;
                console.log('GOT HERE!!!')
            state.exercises.exercises = action.payload;
            });
    },

});

export const { edit_exercise, get_exercise } = exercisesSlice.actions;

export const selectExercises = (state) => {
    console.log(state);
    return state.exercises.exercises;
}

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