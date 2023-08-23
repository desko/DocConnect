import {createSlice} from '@reduxjs/toolkit';

import {loginUser} from '../../services/servicesUsers';

const initialState = {
  status: 'idle',
  error: null,
  token: JSON.parse(localStorage.getItem('userToken')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.token = '';
      localStorage.setItem('userToken', '');
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state, action) =>{
          state.status = 'loading';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.token = action.payload.result;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
  },
});

export const {logOut} = userSlice.actions;
export const userReducer = userSlice.reducer;
