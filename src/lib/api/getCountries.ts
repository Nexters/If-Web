import axios from 'axios';

interface ICountriesDataFromApi {
  id: string;
  type: string;
  name: string;
  main_food: string;
  number_of_stories: number;
  flag_image_url: string;
  stamp_image_url: string;
  album_sticker_image_url: string;
}

export interface ICountriesDataForView {
  id: string;
  type: string;
  name: string;
  mainFood: string;
  numberOfStories: number;
  flagImageUrl: string;
  stampImageUrl: string;
  albumStickerImageUrl: string;
}

const convertCountriesDataFromApi = (
  data: ICountriesDataFromApi[]
): ICountriesDataForView[] => {
  return data.map(
    ({
      id,
      type,
      name,
      main_food,
      number_of_stories,
      flag_image_url,
      stamp_image_url,
      album_sticker_image_url,
    }) => ({
      id,
      type,
      name,
      mainFood: main_food,
      numberOfStories: number_of_stories,
      flagImageUrl: flag_image_url,
      stampImageUrl: stamp_image_url,
      albumStickerImageUrl: album_sticker_image_url,
    })
  );
};

export const getCountries = async () => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.get('/api/countries/stories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return convertCountriesDataFromApi(data);
  } catch (e) {
    throw new Error(e);
  }
};
