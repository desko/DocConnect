import {createSlice} from '@reduxjs/toolkit';

import {fetchSpecialties} from '../../services/servicesSpecialties';

const initialState = {
  status: 'idle',
  error: null,
  specialties: [],
};


const specialtiesSlice = createSlice({
  name: 'specialties',
  initialState,
  reducers: {
    updateIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchSpecialties.pending, (state, action) =>{
          state.status = 'loading';
        })
        .addCase(fetchSpecialties.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.specialties = action.payload;
        })
        .addCase(fetchSpecialties.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
  },
});


// export const {} = specialtiesSlice.actions;
export const specialtiesReducer = specialtiesSlice.reducer;
