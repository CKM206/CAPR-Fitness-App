import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercises/exercisesSlice';



export default configureStore({
    reducer: {
        exercises: exercisesReducer,
    }
})