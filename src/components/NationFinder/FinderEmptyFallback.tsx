import React, { FC, useCallback } from 'react';
import useAddContent from '@/hooks/useAddContent';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';
import SearchEmptyFallback from '@/components/SearchEmptyFallback';

interface IFinderEmptyFallback {
  keyword: string;
}

const FinderEmptyFallback: FC<IFinderEmptyFallback> = ({ keyword }) => {
  const { changeNation } = useAddContent();
  const changeToDefaultMode = useChangeViewMode(AddContentViewMode.DEFAULT);

  const onChangeNation = useCallback(() => {
    const nationInfo = {
      id: null,
      name: 'korea',
      title: keyword,
    };
    changeNation(nationInfo);
    changeToDefaultMode();
  }, [keyword, changeNation, changeToDefaultMode]);

  return (
    <SearchEmptyFallback
      keyword={keyword}
      selectCustomKeyword={onChangeNation}
    />
  );
};

export default FinderEmptyFallback;
