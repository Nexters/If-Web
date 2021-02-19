import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import NationSearchList from '@/components/NationSearch/NationSearchList';
import useInput from '@/hooks/useInput';
import SearchInput from '@/components/SearchInput';
import SearchHeader from '@/components/SearchHeader';
import useAddContent from '@/hooks/useAddContent';
import SearchEmptyFallback from '@/components/SearchEmptyFallback';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchCountries } from '@/lib/api/searchCountries';
import { useDebounce } from 'use-debounce';
import { ISearchNationResult } from '@/types/Nation';

const NationSearch: FC = () => {
  const history = useHistory();
  const { changeCountry } = useAddContent();
  const { value, onChangeValue } = useInput();
  const [debouncedValue] = useDebounce(value, 300);
  const [prevData, setPrevData] = useState<ISearchNationResult[] | null>(null);
  const { data } = useQuery<ISearchNationResult[]>(
    ['searchCountries', debouncedValue],
    searchCountries(debouncedValue),
    {
      enabled: true,
    }
  );

  useEffect(() => {
    if (data) {
      setPrevData(data);
    }
  }, [data]);

  const onChangeCustomNation = useCallback(() => {
    const nationInfo = {
      id: null,
      name: `${value}`,
      type: 'OTHER',
      imgUrl:
        'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg',
    };
    changeCountry(nationInfo);
    history.push('/add');
  }, [value, changeCountry, history]);

  const visibleData = data || prevData;
  if (!visibleData) return null;
  return (
    <>
      <SearchHeader title={'여행한 나라 찾기'} />
      <SearchInput
        value={value}
        onChangeValue={onChangeValue}
        placeholder={'나라를 검색해보세요'}
      />
      {visibleData && visibleData.length > 0 && (
        <NationSearchList nationList={visibleData} />
      )}
      {visibleData && visibleData.length === 0 && (
        <SearchEmptyFallback
          searchKeyword={value}
          selectCustomKeyword={onChangeCustomNation}
          categoryText={'나라'}
        />
      )}
    </>
  );
};

export default NationSearch;
