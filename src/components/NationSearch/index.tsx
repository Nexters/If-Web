import React, { FC, useCallback, useMemo } from 'react';
import Layout from '@/components/Layout';
import NationSearchList from '@/components/NationSearch/NationSearchList';
import { nationList } from '@/lib/constants';
import useInput from '@/hooks/useInput';
import SearchInput from '@/components/SearchInput';
import SearchHeader from '@/components/SearchHeader';
import useAddContent from '@/hooks/useAddContent';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';
import SearchEmptyFallback from '@/components/SearchEmptyFallback';

const NationSearch: FC = () => {
  const { value, onChangeValue } = useInput();
  const { changeNation } = useAddContent();
  const changeToDefaultMode = useChangeViewMode(AddContentViewMode.DEFAULT);

  const filteredNationList = useMemo(() => {
    if (value === '') return nationList;
    return nationList.filter((nation) => nation.title === value);
  }, [value]);

  const onChangeNation = useCallback(() => {
    const nationInfo = {
      id: null,
      name: 'korea',
      title: value,
    };
    changeNation(nationInfo);
    changeToDefaultMode();
  }, [value, changeNation, changeToDefaultMode]);

  return (
    <Layout padding={'30px 24px'}>
      <SearchHeader title={'여행한 나라 찾기'} />
      <SearchInput
        value={value}
        onChangeValue={onChangeValue}
        placeholder={'나라를 검색해보세요'}
      />
      {filteredNationList.length > 0 && (
        <NationSearchList nationList={filteredNationList} />
      )}
      {filteredNationList.length === 0 && (
        <SearchEmptyFallback
          searchKeyword={value}
          selectCustomKeyword={onChangeNation}
          categoryText={'나라'}
        />
      )}
    </Layout>
  );
};

export default NationSearch;
