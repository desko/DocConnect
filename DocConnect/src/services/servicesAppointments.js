import axios from 'axios';
import {formatDateAndTime} from '../common/helpers';
const baseUrl = `${import.meta.env.VITE_BASE_URL}/Appointments`;

export const createUserAppointment = async (userId, doctorId, dateObject, token) => {
  try {
    const response = await axios.post(`${baseUrl}/ScheduleAppointment`, {
      // Headers: {
      //   Authorization: token ? `Bearer ${token}` : null,
      // },
      // body: {
      doctorId,
      userId,
      date: formatDateAndTime(dateObject),
      // },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserAppointments = async (userId) => {

};

export const getDoctorAppointments = async (doctorId) => {

};
