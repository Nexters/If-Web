import axios from 'axios';

export const searchCountries = (input: string | null) => async () => {
  try {
    const token = localStorage.getItem('token');
    const url =
      process.env.NODE_ENV === 'production'
        ? '/countries/search'
        : `/api/countries/search`;
    const { data } = await axios.get(url, {
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
