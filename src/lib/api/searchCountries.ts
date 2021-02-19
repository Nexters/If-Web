import axios from 'axios';

export const searchCountries = (input: string | null) => async () => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.get('/api/countries/search', {
      params: {
        countryName: input,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
