import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/Appointments`;

export const getUpcomingAppointments = async (userId, token) => {
  try {
    const data = await axios.get(`${baseUrl}/AllUpcomingAppointments?userId=${userId}`, {headers: {
      'Authorization': 'Bearer ' + token,
    }});
    return data;
  } catch (error) {
    return error;
  }
};
