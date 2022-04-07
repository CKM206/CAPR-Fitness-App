import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { navigationRef } from "../../../../NavigationRef";
import fitnessApi from '../../../api/fitnessApi';

// Set the Initial State
const workoutsAdapter = createEntityAdapter({
    selectId: (workout) => workout._id,

    sortComparer: (a, b) => a.timeFinished.localeCompare(b.timeFinished),
});

const initialState = workoutsAdapter.getInitialState({
    workout: {
        _id: '',
        title: '',
        note: '',
        timeStarted: '',
        timeFinished: '',
        exercises: {
            _ids: [],
            entities: {
                _id: '',
                exercise: '',
                startTime: '',
                endTime: '',
                sets: {
                    _ids: [],
                    entities: {
                        _id: '',
                        set: 0,
                        reps: 0,
                        duration: 0,
                        restTime: 0,
                        isComplete: false
                    },
                }
            },
        }
    },
    status: 'idle',
    error: null
});


// Create WorkoutSlice to handle Workout state
export const workoutsSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {

    }

});

// Export State Actions
export const { } = workoutsSlice.actions;

// Export default selector
export const {
    selectAll: selectAllWorkouts,
    selectById: selectWorkoutById,
    selectIds: selectWorkoutIds
} = workoutsAdapter.getSelectors(state => state.workouts);

// Export the State Reducer
export default workoutsSlice.reducer;













