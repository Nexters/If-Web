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
  country: {
    album_sticker_image_url: string;
    flag_image_url: string;
    id: string;
    main_food: string;
    name: string;
    stamp_image_url: string;
    type: string;
  };
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
  countryName: string;
}

const convertCountryByTypeDataFromApi = (
  data: ICountryByTypeFromApi[]
): ICountryByTypeForView[] => {
  return data.map(({ id, date, title, memo, picture_list, country }) => ({
    id,
    date,
    title,
    memo,
    picture_list: picture_list.map(({ url }) => ({
      url,
    })),
    countryName: country.name,
  }));
};

export const getCountryByType = (countryType: string) => async () => {
  try {
    const token = localStorage.getItem('token');
    const url =
      process.env.NODE_ENV === 'production'
        ? `/stories/countries/${countryType}`
        : `/api/stories/countries/${countryType}`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return convertCountryByTypeDataFromApi(data);
  } catch (e) {
    throw new Error(e);
  }
};
