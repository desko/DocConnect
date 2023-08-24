import axios from 'axios';

import {createAsyncThunk} from '@reduxjs/toolkit';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/User`;

export const registerUser = async (userData) => {
  const data = await axios.post(`${baseUrl}/Register`, userData);
  return data;
};

export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
  const response = await axios.post(`${baseUrl}/Login`, userData);

  return response.data;
});

export const forgottenPasswordUser = async (email) => {
  const response = await axios.get(`${baseUrl}/ResetForgottenPassword`, email);

  return response.data;
};

export const emailVarificationUser = async (userId, token) => {
  const response = await axios
      .post(`${baseUrl}/ConfirmUserEmail?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`);
  return response.data;
};


