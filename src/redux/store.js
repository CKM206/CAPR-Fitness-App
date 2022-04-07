import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercises/exercisesSlice';
import workoutReducer from './features/workout/workoutSlice';
import workoutExercisesReducer from './features/workout/workoutExercisesSlice';
import workoutSetsReducer from './features/workout/workoutSetsSlice';

export default configureStore({
    reducer: {
        exercises: exercisesReducer,
        workout: workoutReducer,
        workoutExercises: workoutExercisesReducer,
        workoutSets: workoutSetsReducer,
    }
})