import React, { FC, useCallback, useMemo } from 'react';
import Layout from '@/components/Layout';
import NationSearchList from '@/components/NationSearch/NationSearchList';
import { nationList } from '@/lib/constants';
import useInput from '@/hooks/useInput';
import SearchInput from '@/components/SearchInput';
import SearchHeader from '@/components/SearchHeader';
import useAddContent from '@/hooks/useAddContent';
import SearchEmptyFallback from '@/components/SearchEmptyFallback';
import { useHistory } from 'react-router-dom';

const NationSearch: FC = () => {
  const { value, onChangeValue } = useInput();
  const { changeNation } = useAddContent();
  const history = useHistory();

  const filteredNationList = useMemo(() => {
    if (value === '') return nationList;
    return nationList.filter((nation) => nation.title === value);
  }, [value]);

  const onChangeCustomNation = useCallback(() => {
    const nationInfo = {
      id: null,
      name: 'korea',
      title: value,
    };
    changeNation(nationInfo);
    history.push('/add');
  }, [value, changeNation, history]);

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
          selectCustomKeyword={onChangeCustomNation}
          categoryText={'나라'}
        />
      )}
    </Layout>
  );
};

export default NationSearch;