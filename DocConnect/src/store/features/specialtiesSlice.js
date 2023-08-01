import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  error: null,
  specialties: [],
};

export const fetchSpecialties = createAsyncThunk('specialties/fetchSpecialties', async () => {
  const response = await axios.get(`https://localhost:7038/api/Specialties`);
  console.log(response.data);
  // const data = await response.json();
  // console.log(data);
  return response.data;
});

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
