import { createAsyncThunk, createSlice, nanoid, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';
// import { selectAllExercises } from "./workoutExercisesSlice";
// import { selectAllSets } from "./workoutSetsSlice";


const workoutAdapter = createEntityAdapter({
    selectId: (workout) => workout._id,
});

const initialState = workoutAdapter.getInitialState({
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
    error: null,
});


export const saveWorkout = createAsyncThunk(
    'workout/saveWorkout',
    async workout => {
        try
        {
            console.log(workout);
            
            //const response = await fitnessApi.post('/workouts', workout);

            //return response.data
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

// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        create_workout: {
            reducer: (state, action) => {
                workoutAdapter.addOne(state, action.payload)
                console.log('Workout Begun: ', state);
            },
            prepare: (workout) => {
                const _id = nanoid();

                workout._id = _id
                return { payload:  workout}
            },
        },
        change_title: (state, action) => {
            const { _id, title } = action.payload

            console.log('Initial State: ', state)
            state.entities[_id].title = title;
            
        },
        change_note: (state, action) => {
            const { _id, note } = action.payload

            console.log('Initial State: ', state)
            state.entities[_id].note = note;
        },
        update_workout: workoutAdapter.updateOne,
        begin_workout: (state, action) => {
            
        },
        pause_workout: (state, action) => {

        },
        cancel_workout: workoutAdapter.removeOne,
        complete_workout: (state, action) => {

        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(saveWorkout.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log('SAVED WORKOUT')
            //workoutAdapter.addOne(state, action.payload);

        })
        .addCase(saveWorkout.rejected, (state, action) => {
            state.status = 'failed'
            console.log('FAILED TO SAVE WORKOUT');
            state.error = action.error.message
        });
    }

});

// Export State Actions
export const { create_workout, change_title, update_workout, cancel_workout } = workoutSlice.actions;

export const {
    selectAll: selectAllWorkouts,
    selectById: selectWorkoutById,
    selectIds: selectWorkoutIds
} = workoutAdapter.getSelectors(state => state.workout);

// Custom Selector
// export const selectWorkoutStates = createSelector(
//     [selectAllExercises, selectAllSets],
//     (exercises, sets) => {
//         console.log('Exercises: ', exercises)
//         console.log('Sets: ', sets)
//     }
// );
export const selectActiveWorkout = createSelector(
    [selectAllWorkouts], 
    (workouts) => workouts.find(workout => workout.activeWorkout === true)
);
export const selectActiveWorkoutId = createSelector(
    [selectActiveWorkout],
    (activeWorkout) => activeWorkout ? activeWorkout._id : null
)
// Export the State Reducer
export default workoutSlice.reducer;













