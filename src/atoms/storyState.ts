import { useCallback } from 'react';
import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';
import { IImage } from '@/types';

export enum StoryStateField {
  TITLE = 'title',
  MEMO = 'memo',
}

interface IStoryState {
  title: string;
  placeName: string | null;
  placeLatitude?: number | null;
  placeLongitude?: number | null;
  memo: string;
  images: IImage[];
  date: string;
  pictures: FormData[];
  country: {
    id: string;
    name: string;
    type: string;
    imgUrl?: string;
  };
}

export const StoryStateAtom = atom<IStoryState>({
  key: 'addStoryState',
  default: {
    title: '',
    placeName: null,
    date: new Date().toString(),
    country: {
      id: '',
      name: '',
      type: '',
      imgUrl:
        'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg',
    },
    memo: '',
    images: [],
    pictures: [],
  },
});

export const sendedStoryState = selector({
  key: 'sendedStoryState',
  get: ({ get }) => {
    const storyState = get(StoryStateAtom);
    const {
      title,
      placeName,
      placeLatitude,
      placeLongitude,
      pictures,
      date,
      memo,
      country,
    } = storyState;

    return {
      title,
      placeName,
      placeLatitude,
      placeLongitude,
      pictures,
      date,
      memo,
      country,
    };
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
    ({ placeName, placeLatitude, placeLongitude }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        placeName,
        placeLatitude,
        placeLongitude,
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
