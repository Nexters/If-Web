import React from 'react';
import Layout from '@/components/Layout';
import SearchHeader from '@/components/SearchHeader';
import SearchInput from '@/components/SearchInput';
import useInput from '@/hooks/useInput';
import SearchEmptyFallback from '@/components/SearchEmptyFallback';
import PlaceSearchList from '@/components/PlaceSearch/PlaceSearchList';

const PlaceSearch = () => {
  const { value, onChangeValue } = useInput();

  return (
    <Layout padding={'30px 24px'}>
      <SearchHeader title={'장소 검색하기'} />
      <SearchInput
        value={value}
        onChangeValue={onChangeValue}
        placeholder={'장소를 검색해보세요'}
      />
      <PlaceSearchList />
      {/* 검색된 항목이 없을 때의 fallback 컴포넌트
        <SearchEmptyFallback
        searchKeyword={value}
        selectCustomKeyword={() => {}}
        categoryText={'장소'}
      />
      */}
    </Layout>
  );
};

export default PlaceSearch;
