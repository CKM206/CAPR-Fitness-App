import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercises/exercisesSlice';
import workoutsReducer from './features/workout/workoutsSlice';
// import workoutExercisesReducer from './features/workout/workoutExercisesSlice';
// import workoutSetsReducer from './features/workout/workoutSetsSlice';

export default configureStore({
    reducer: {
        exercises: exercisesReducer,
        workouts: workoutsReducer,
        // workoutExercises: workoutExercisesReducer,
        // workoutSets: workoutSetsReducer,
    }
})