import axios from 'axios';

interface ICountriesDataFromApi {
  id: string;
  type: string;
  name: string;
  number_of_stories: number;
  flag_image_url: string;
  letter_image_url: string;
}

export interface ICountriesDataForView {
  id: string;
  type: string;
  name: string;
  numberOfStories: number;
  flagImageUrl: string;
  letterImageUrl: string;
}

const convertCountriesDataFromApi = (
  data: ICountriesDataFromApi[]
): ICountriesDataForView[] => {
  return data.map(
    ({
      id,
      type,
      name,
      number_of_stories,
      flag_image_url,
      letter_image_url,
    }) => ({
      id,
      type,
      name,
      numberOfStories: number_of_stories,
      flagImageUrl: flag_image_url,
      letterImageUrl: letter_image_url,
    })
  );
};

export const getCountries = async () => {
  try {
    const result = await axios.get('/api/countries/stories', {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1c2VyIiwic3ViIjoiTmV4dGVyc0lmIiwiaXNzIjoiTmV4dGVyczZ0ZWFtIiwiZXhwIjoxNjI0NDYxMzE5OTIwLCJpYXQiOjE2MTM2NjEzMTk5MjAsImlkIjoiYThmMzc4YzUtZmNkYi00MWQ1LWEzOGItOWIzZDVkMzU0OTA3Iiwic29jaWFsIjoia2FrYW8ifQ.K2Z04hb2OQSFggxK7lHCRZ6t5cADYdoNKf3hafCQwLg`,
      },
    });
    return convertCountriesDataFromApi(result.data);
  } catch (e) {
    throw new Error(e);
  }
};
