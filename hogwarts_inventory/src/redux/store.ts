import { configureSTore } from '@reduxjs/toolkit';
import ( reducer ) from './slices/rootSlice';

export const store = configureStore({
    reducer,
    devTool: true
})