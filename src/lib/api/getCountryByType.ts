import axios from 'axios';

interface ICountryByTypeFromApi {
  created_at: string;
  date: string;
  id: string;
  memo: string;
  picture_list: {
    id: string;
    order: number;
    url: string;
    file_name: string;
    story: string;
  }[];
  title: string;
  updated_at: string;
  user_id: string;
}

export interface ICountryByTypeForView {
  id: string;
  date: string;
  title: string;
  memo: string;
  picture_list: {
    id?: number;
    fileName?: string;
    order?: number;
    storyId?: number;
    url: string;
  }[];
}

const convertCountryByTypeDataFromApi = (
  data: ICountryByTypeFromApi[]
): ICountryByTypeForView[] => {
  return data.map(({ id, date, title, memo, picture_list }) => ({
    id,
    date,
    title,
    memo,
    picture_list: picture_list.map(({ url }) => ({
      url,
    })),
  }));
};

export const getCountryByType = (countryType: string) => async () => {
  try {
    const { data } = await axios.get(`/api/stories/countries/${countryType}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1c2VyIiwic3ViIjoiTmV4dGVyc0lmIiwiaXNzIjoiTmV4dGVyczZ0ZWFtIiwiZXhwIjoxNjI0NDYxMzE5OTIwLCJpYXQiOjE2MTM2NjEzMTk5MjAsImlkIjoiYThmMzc4YzUtZmNkYi00MWQ1LWEzOGItOWIzZDVkMzU0OTA3Iiwic29jaWFsIjoia2FrYW8ifQ.K2Z04hb2OQSFggxK7lHCRZ6t5cADYdoNKf3hafCQwLg`,
      },
    });
    return convertCountryByTypeDataFromApi(data);
  } catch (e) {
    throw new Error(e);
  }
};
