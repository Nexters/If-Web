import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { StoryStateAtom } from '@/atoms/storyState';

function useAddContent() {
  const { nation } = useRecoilValue(StoryStateAtom);
  const setAddContentState = useSetRecoilState(StoryStateAtom);

  const changeNation = useCallback(
    (nationInfo) => {
      setAddContentState((prevState) => ({
        ...prevState,
        nation: nationInfo,
      }));
    },
    [setAddContentState]
  );

  return {
    nation,
    changeNation,
  };
}

export default useAddContent;
