import { combineReducers } from '@reduxjs/toolkit';

import workoutsReducer from '.workoutsSlice';
import workoutExercisesReducer from '.workoutExercisesSlice';
import workoutSetsReducer from '.workoutSetsSlice';
import exercisesReducer from '../exercises/exercisesSlice';

export default combineReducers ({
    workoutsReducer,
    workoutExercisesReducer,
    workoutSetsReducer
});