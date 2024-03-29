import axios from 'axios';

import {createAsyncThunk} from '@reduxjs/toolkit';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/User`;

export const registerUser = async (userData) => {
  try {
    const data = await axios.post(`${baseUrl}/Register`, userData);
    return data;
  } catch (error) {
    return error;
  }
};

export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/Login`, userData, {
      validateStatus: (status) => status,
    });

    return response.data;
  } catch (error) {
    return error;
  }
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
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const emailVarificationUser = async (userId, token) => {
  const response = await axios
      .post(`${baseUrl}/ConfirmUserEmail?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`);
  return response.data;
};

export const resendEmailVerificationUser = async (token) => {
  try {
    const response = await axios
        .get(`${baseUrl}/ResendEmailVerification`, {headers: {'Authorization': 'Bearer ' + token}});
    return response.data;
  } catch (error) {
    return error;
  }
};
