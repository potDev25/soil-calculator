import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import calculatorReducer from './Slice/calculatorSlice'
import loaderReducer from './Slice/loderSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        calculator: calculatorReducer,
        loader: loaderReducer,
    }
});