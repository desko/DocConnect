import axios from 'axios';
import {formatDateAndTime} from '../common/helpers';
const baseUrl = `${import.meta.env.VITE_BASE_URL}/Appointments`;

export const createUserAppointment = async (userId, doctorId, dateObject, token) => {
  try {
    const response = await axios.post(`${baseUrl}/ScheduleAppointment`, {
      doctorId,
      userId,
      date: formatDateAndTime(dateObject),
    },
    {
      headers: {
        'Authorization': token ? `Bearer ${token}` : null,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const getUpcomingAppointments = async (userId, token, userLocalTime) => {
  try {
    const data = await axios.get(
        `${baseUrl}/AllUpcomingAppointments?userId=${userId}&patientLocalDate=${userLocalTime}`,
        {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        },
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserAppointments = async (userId, token) => {
  try {
    const response = await axios.get(
        `${baseUrl}/UserTakenHours?userId=${userId}`,
        {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        },
    );
    const data = response.data.result;

    return data;
  } catch (error) {
    return error;
  }
};

export const getDoctorAppointments = async (doctorId, token) => {
  try {
    const response = await axios.get(
        `${baseUrl}/DoctorTakenHours?doctorId=${doctorId}`,
        {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        },
    );
    const data = response.data.result;

    return data;
  } catch (error) {
    return error;
  }
};
