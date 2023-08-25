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

export const forgottenPasswordUser = async (emailAddress) => {
  try {
    const response = await axios.post(`${baseUrl}/RequestForgottenPassword`, {
      emailAddress,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const resetPasswordUser = async (newPassword, repeatPassword, token, userId) => {
  try {
    const response = await axios.post(
        `${baseUrl}/ResetPassword?userId=${
          encodeURIComponent(userId)
        }&token=${
          encodeURIComponent(token.replace(/ /g, '+'))
        }`,
        {
          newPassword,
          repeatPassword,
        });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const emailVarificationUser = async (userId, token) => {
  const response = await axios
      .post(`${baseUrl}/ConfirmUserEmail?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`);
  return response.data;
};


