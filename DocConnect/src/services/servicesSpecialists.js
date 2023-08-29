import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/Specialists`;

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

export const fetchSpecialists = async (cityId, specialtyId, doctorName) => {
  const data = await axios.get(baseUrl, {params: {
    cityId,
    specialtyId,
    doctorName,
  }});

  return data;
};
