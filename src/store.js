import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import calculatorReducer from './Slice/calculatorSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        calculator: calculatorReducer
    }
});