import { useCallback } from 'react';
import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';
import { IImage } from '@/types';
import { getFormattedFullDate } from '@/utils/formatter';

export enum StoryStateField {
  TITLE = 'title',
  MEMO = 'memo',
}

interface IStoryState {
  title: string;
  place: {
    id?: string | null;
    name: string;
    latitude?: number | null;
    longitude?: number | null;
  };
  country: {
    id: string;
    name: string;
    type: string;
    imgUrl?: string;
    flag_image_url?: string;
  };
  memo: string;
  images: IImage[];
  date: string;
  pictures: File[];
}

export const StoryStateAtom = atom<IStoryState>({
  key: 'addStoryState',
  default: {
    title: '',
    place: {
      name: '',
    },
    date: '',
    country: {
      id: '',
      name: '',
      type: '',
      imgUrl:
        'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg',
      flag_image_url: '',
    },
    memo: '',
    images: [],
    pictures: [],
  },
});

export const StoryFormData = selector({
  key: 'sendedStoryState',
  get: ({ get }) => {
    const storyState = get(StoryStateAtom);
    const { title, place, pictures, country, date, memo } = storyState;
    const form = new FormData();
    form.append('title', title);
    form.append('placeName', place.name);
    form.append('placeLatitude', `${place.latitude}`);
    form.append('placeLongitude', `${place.longitude}`);
    form.append('date', date || getFormattedFullDate(new Date().toString()));
    form.append('memo', memo);
    if (country.id && country.type !== 'OTHER') {
      form.append('countryId', country.id);
    } else {
      form.append('newCountryName', country.name);
    }
    pictures.map((picture) => form.append('pictures', picture));

    return form;
  },
});

export const StoryFormCondition = selector({
  key: 'isAvailabePostStory',
  get: ({ get }) => {
    const storyState = get(StoryStateAtom);
    const { title, place, pictures, country, memo } = storyState;
    if (!title || !place.name || pictures.length === 0 || !memo) return false;
    if (!country.id && !country.name) return false;
    return true;
  },
});

export const useStoryState = () => {
  const [storyState, setStoryStateAtom] = useRecoilState(StoryStateAtom);
  const setStoryState = useCallback(
    ({ field, value }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    },
    [setStoryStateAtom]
  );

  const setStoryDetail = useCallback(
    ({ id, country, date, title, memo, place, picture_list }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        id,
        country,
        date,
        title,
        memo,
        place,
        images: picture_list,
      }));
    },
    [setStoryStateAtom]
  );

  const setStoryPlace = useCallback(
    ({ place }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        place: {
          ...prevState.place,
          ...place,
        },
      }));
    },
    [setStoryStateAtom]
  );

  return {
    storyState,
    setStoryState,
    setStoryDetail,
    setStoryPlace,
  };
};

export const useStoryImage = () => {
  const setStoryStateAtom = useSetRecoilState(StoryStateAtom);
  const setStoryImageState = useCallback(
    ({ image, file }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        images: [...prevState.images, { url: image }],
        pictures: [...prevState.pictures, file],
      }));
    },
    [setStoryStateAtom]
  );

  return {
    setStoryImageState,
  };
};
