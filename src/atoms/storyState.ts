import { useCallback } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { NationIconType } from '@/components/NationIcon/NationIcon';

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
  images: string[];
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

  return {
    storyState,
    setStoryState,
  };
};

export const useStoryImage = () => {
  const setStoryStateAtom = useSetRecoilState(StoryStateAtom);
  const setStoryImageState = useCallback(
    ({ image }) => {
      setStoryStateAtom((prevState) => ({
        ...prevState,
        images: [...prevState.images, image],
      }));
    },
    [setStoryStateAtom]
  );

  return {
    setStoryImageState,
  };
};
