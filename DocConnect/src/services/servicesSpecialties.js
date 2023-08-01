import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;


export const fetchSpecialties = createAsyncThunk('specialties/fetchSpecialties', async () => {
  const response = await axios.get(`${baseUrl}/Specialties`);
  return response.data;
});
