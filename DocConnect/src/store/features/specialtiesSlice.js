import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
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

  },
});

// export const {} = specialtiesSlice.actions;
export const specialtiesReducer = specialtiesSlice.reducer;
