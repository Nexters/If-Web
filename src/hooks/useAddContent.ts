import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { addContentState } from '@/atoms/addContentState';

function useAddContent() {
  const { nation } = useRecoilValue(addContentState);
  const setAddContentState = useSetRecoilState(addContentState);

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
