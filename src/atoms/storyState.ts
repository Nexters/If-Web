import { useCallback } from 'react';
import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';
import { NationIconType } from '@/components/NationIcon/NationIcon';
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
  country: {
    id: string | null;
    name: NationIconType;
    title: string;
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
    placeName: null,
    date: new Date().toString(),
    country: {
      id: null,
      name: 'korea',
      title: '여행한 나라',
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
    } = storyState;
    console.log('aaa');
    console.log(pictures);
    return {
      title,
      placeName,
      placeLatitude,
      placeLongitude,
      pictures,
      date,
      memo,
      countryId: '0f5d5f2e-e477-4993-bdff-3ea07a97791f',
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
