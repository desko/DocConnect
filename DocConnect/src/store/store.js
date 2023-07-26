import {configureStore} from '@reduxjs/toolkit';
import {specialtiesReducer} from './features/specialtiesSlice.js';

export const store = configureStore({
  reducer: {
    specialties: specialtiesReducer,
  },
});
