import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { StoryStateAtom } from '@/atoms/storyState';

function useAddContent() {
  const { country } = useRecoilValue(StoryStateAtom);
  const setAddContentState = useSetRecoilState(StoryStateAtom);

  const changeCountry = useCallback(
    (countryInfo) => {
      setAddContentState((prevState) => ({
        ...prevState,
        country: countryInfo,
      }));
    },
    [setAddContentState]
  );

  return {
    country,
    changeCountry,
  };
}

export default useAddContent;
