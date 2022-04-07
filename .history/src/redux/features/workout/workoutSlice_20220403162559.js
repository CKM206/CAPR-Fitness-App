import { createAsyncThunk, createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';


const initialState = workoutSetsAdapter.getInitialState({
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
)};




// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        begin_workout: {
            reducer: (state, action) => {
                //console.log('Workout Begun: ', action.payload);
                workoutA
            },
            prepare: (workout) => {
                const _id = nanoid();

                return { payload: {_id, workout}}
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
// export const selectExerciseIds = state => state.workout.exercises._ids;
// export const selectExercises = state => state.workout.exercises.entities;

export const selectActiveWorkout = createSelector(
    [selectWorkout], 
    (workout) => workout
);
// Export the State Reducer
export default workoutSlice.reducer;













