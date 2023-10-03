import {createSlice} from '@reduxjs/toolkit';
import {loginUser} from '../../services/servicesUsers';
import jwtDecode from 'jwt-decode';

const initialState = {
  status: 'idle',
  error: null,
  token: JSON.parse(localStorage.getItem('uToken')) || null,
  isVerified: JSON.parse(localStorage.getItem('uToken')) ?
    jwtDecode(JSON.parse(localStorage.getItem('uToken'))).email_verified :
    null,
  userId: JSON.parse(localStorage.getItem('uToken')) ?
    jwtDecode(JSON.parse(localStorage.getItem('uToken'))).sub :
    null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.token = null;
      localStorage.setItem('uToken', null);
      state.isVerified = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          if (action?.payload?.httpStatusCode === 200) {
            state.status = 'succeeded';
            state.token = action.payload.result;
            state.isVerified = jwtDecode(action.payload.result).email_verified;
            state.userId = jwtDecode(action.payload.result).sub;
          }
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
  },
});

export const {logOut} = userSlice.actions;
export const userReducer = userSlice.reducer;
