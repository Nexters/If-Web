/* global kakao */
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SearchHeader from '@/components/SearchHeader';
import SearchInput from '@/components/SearchInput';
import useInput from '@/hooks/useInput';
import SearchEmptyFallback from '@/components/SearchEmptyFallback';
import PlaceSearchList from '@/components/PlaceSearch/PlaceSearchList';
import { IPlace } from '@/types/Place';

declare global {
  interface Window {
    kakao: any;
  }
}

const PlaceSearch = () => {
  const [placeList, setPlaceList] = useState<IPlace[]>([]);
  const { value, onChangeValue } = useInput();

  const searchPlaceCb = (data: IPlace[], status: string) => {
    if (status === 'OK') setPlaceList(data);
  };

  useEffect(() => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(value, searchPlaceCb);
  }, [value]);

  return (
    <Layout padding={'30px 24px'}>
      <SearchHeader title={'장소 검색하기'} />
      <SearchInput
        value={value}
        onChangeValue={onChangeValue}
        placeholder={'장소를 검색해보세요'}
      />
      {placeList.length > 0 ? (
        <PlaceSearchList places={placeList} />
      ) : (
        <SearchEmptyFallback
          searchKeyword={value}
          selectCustomKeyword={() => {}}
          categoryText={'장소'}
        />
      )}
    </Layout>
  );
};

export default PlaceSearch;
