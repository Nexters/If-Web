import { useCallback } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { NationIconType } from '@/components/NationIcon/NationIcon';
import { IImage } from '@/types';

export enum StoryStateField {
  TITLE = 'title',
  MEMO = 'memo',
}

interface IStoryState {
  title: string;
  place: string | null;
  nation: {
    id: number | null;
    name: NationIconType;
    title: string;
  };
  memo: string;
  images: IImage[];
}

export const StoryStateAtom = atom<IStoryState>({
  key: 'addStoryState',
  default: {
    title: '',
    place: null,
    nation: {
      id: null,
      name: 'korea',
      title: '여행한 나라',
    },
    memo: '',
    images: [],
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

  return {
    storyState,
    setStoryState,
    setStoryDetail,
  };
};

export const useStoryImage = () => {
  const setStoryStateAtom = useSetRecoilState(StoryStateAtom);
  const setStoryImageState = useCallback(
    ({ image }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        images: [...prevState.images, { url: image }],
      }));
    },
    [setStoryStateAtom]
  );

  return {
    setStoryImageState,
  };
};
