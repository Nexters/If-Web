import React, { FC, useMemo } from 'react';
import Layout from '@/components/Layout';
import FinderNationList from '@/components/NationFinder/FinderNationList';
import FinderEmptyFallback from '@/components/NationFinder/FinderEmptyFallback';
import { nationList } from '@/lib/constants';
import useInput from '@/hooks/useInput';
import SearchInput from '@/components/SearchInput';
import SearchHeader from '@/components/SearchHeader';

const NationFinder: FC = () => {
  const { value, onChangeValue } = useInput();

  const filteredNationList = useMemo(() => {
    if (value === '') return nationList;
    return nationList.filter((nation) => nation.title === value);
  }, [value]);

  return (
    <Layout padding={'30px 24px'}>
      <SearchHeader title={'여행한 나라 찾기'} />
      <SearchInput
        value={value}
        onChangeValue={onChangeValue}
        placeholder={'나라를 검색해보세요'}
      />
      {filteredNationList.length > 0 && (
        <FinderNationList nationList={filteredNationList} />
      )}
      {filteredNationList.length === 0 && (
        <FinderEmptyFallback keyword={value} />
      )}
    </Layout>
  );
};

export default NationFinder;
