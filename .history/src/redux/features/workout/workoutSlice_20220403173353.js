import { createAsyncThunk, createSlice, nanoid, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';



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




// Create WorkoutSlice to handle Workout state
export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        begin_workout: {
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
            console.log('Title:', action.payload)
            // console.log('Initial State: ', state)
            // state.entities._id.title = title;
            // console.log('New State: ', state)
            
        }
    }

});

// Export State Actions
export const { begin_workout, change_title } = workoutSlice.actions;

export const {
    selectAll: selectAllWorkouts,
    selectById: selectWorkoutById,
    selectIds: selectWorkoutIds
} = workoutAdapter.getSelectors(state => state.workout);

// Custom Selector
export const selectSetsOfExercise = (state, props) => {
    const setsToReturn = state.workoutSets.ids.filter(element => props.sets.includes(element))
    return setsToReturn;
}
export const selectActiveWorkout = createSelector(
    [selectAllWorkouts], 
    (workout) => workout[0]
    
);
export const selectActiveWorkoutId = createSelector(
    [selectWorkoutIds],
    (workoutId) => workoutId[0]
)
// Export the State Reducer
export default workoutSlice.reducer;













