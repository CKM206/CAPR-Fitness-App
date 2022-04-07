import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';


const initialState ={
    workout: {},
    // workout: {
    //     _id: '',
    //     title: '',
    //     note: '',
    //     timeStarted: '',
    //     timeFinished: '',
    //     exercises: {
    //         _ids: [],
    //         entities: {
    //             _id: '',
    //             exercise: '',
    //             startTime: '',
    //             endTime: '',
    //             sets: {
    //                 _ids: [],
    //                 entities: {
    //                     _id: '',
    //                     set: 0,
    //                     reps: 0,
    //                     duration: 0,
    //                     restTime: 0,
    //                 },
    //             }
    //         },
    //     }
    // },
    status: 'idle',
    error: null
};


// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        begin_workout: {
            reducer: (state, action) => {

            },
            prepare: (workout) => {

            },
        },
        change_title: (state, action) => {
            console.log('Setting Title: ', action.payload)

        }
    }

});

// Export State Actions
export const { begin_workout } = workoutSlice.actions;

// Export default selector
export const selectWorkout = state => state.workout;
export const selectExerciseIds = state => state.workout.exercises._ids;
export const selectExercises = state => state.workout.exercises.entities;
export const selectExerciseById = (state, props) => {
    const exercise = state.workout.exercises
    return state.workout.exercises.entities[props._id];
}

// Export the State Reducer
export default workoutsSlice.reducer;













