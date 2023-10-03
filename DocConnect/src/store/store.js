import {configureStore} from '@reduxjs/toolkit';
import {specialtiesReducer} from './features/specialtiesSlice.js';
import {userReducer} from './features/userSlice.js';

export const store = configureStore({
  reducer: {
    specialties: specialtiesReducer,
    user: userReducer,
  },
});
