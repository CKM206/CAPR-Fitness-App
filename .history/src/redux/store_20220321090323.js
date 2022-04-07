import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercises/exercisesSlice';
// import workoutsReducer from './features/workout/workoutsSlice';
// import workoutExercisesReducer from './features/workout/workoutExercisesSlice';
// import workoutSetsReducer from './features/workout/workoutSetsSlice';
import rootWorkoutsReducer from './features/workout/rootReducer';

export default configureStore({
    reducer: {
        exercises: exercisesReducer,
        rootWorkouts: rootWorkoutsReducer
    }
})