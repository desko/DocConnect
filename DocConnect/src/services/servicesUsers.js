import axios from 'axios';

import {createAsyncThunk} from '@reduxjs/toolkit';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/User`;

// Passwords do not match error

const confirmPassword = {
  'type': 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
  'title': 'One or more validation errors occurred.',
  'status': 400,
  'traceId': '00-f7a90de684058faafeb1f1b2f86d7305-1c713c01634de3f9-00',
  'errors': {
    'confirmPassword': [
      'Those passwords didn’t match.Please try again.',
    ],
  },
};

const emailAdress ={
  'success': false,
  'httpStatusCode': 400,
  'errorMessage': 'This email is already registered by another user.',
  'result': null,
};

const successRegistration = {
  'success': true,
  'httpStatusCode': 201,
  'errorMessage': null,
  'result': null,
};

export const registerUser = (userData) => {
  // axios.post(`${baseUrl}/Register`, userData)
  //     .then((res) => res);

  return successRegistration;
};


const loginSuccess = {

  'success': true,
  'httpStatusCode': 200,
  'errorMessage': null,
  // eslint-disable-next-line max-len
  'result': 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidCIsImp0aSI6IjAzNjRlZTI3LTc2NTUtNGFjZS04ZWEwLWVmOWNmNjhlNTAzNyIsImV4cCI6MTY5MTkxNjc5NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAzOC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDM4LyJ9.Tfh6LVHvHHN2Wcd1UHsoieqVoCpbzHYntTymbLrpi7I',

};

const loginFail = {
  'success': false,
  'httpStatusCode': 400,
  'errorMessage': 'Incorrect email or password. Please try again.',
  'result': null,
};
export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
  // const response = await axios.post(`${baseUrl}/Login`, userData);

  // return response.data;
  return loginSuccess;
});
