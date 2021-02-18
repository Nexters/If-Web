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
  date?: string;
  pictures: FormData[];
}

export const StoryStateAtom = atom<IStoryState>({
  key: 'addStoryState',
  default: {
    title: '',
    placeName: null,
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

    return {
      title,
      placeName,
      placeLatitude,
      placeLongitude,
      pictures,
      date,
      memo,
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
    ({ date, memo, picture_list, experience_place }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        date,
        memo,
        images: picture_list,
        place: experience_place,
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
