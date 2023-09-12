import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/Specialists`;

export const getSpecialist = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);

    const result = response.data.result;
    return result;
  } catch (error) {
    return error.response;
  }
};

export const searchSpecialists = async (startingWith) => {
  try {
    const response = await axios.get(`${baseUrl}/SpecialistNameSuggestion`, {
      params: {
        startingWith,
      },
    });

    const result = response.data.result;
    const transformedResult = result.map((el) => {
      return {
        name: `${el.firstName} ${el.lastName}`,
        value: el.id,
      };
    });
    return transformedResult;
  } catch (error) {
    return error;
  }
};

export const searchCities = async (startingWith) => {
  try {
    const response = await axios.get(`${baseUrl}/CityNameSuggestion`, {
      params: {
        startingWith: startingWith,
      },
    });

    const result = response.data.result;
    const transformedResult = result.map((el) => {
      return {
        name: el.cityName,
        value: el.id,
      };
    });
    return transformedResult;
  } catch (error) {
    return error;
  }
};

export const fetchSpecialists = async (cityId = null, specialtyId = null, doctorName = null) => {
  const data = await axios.get(baseUrl, {params: {
    cityId,
    specialtyId,
    doctorName,
  }});
  return data.data.result;
};
