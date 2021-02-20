import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { GeolocationAtom } from '@/atoms/geolocation';
import { useStoryState } from '@/atoms/storyState';
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
  const [geolocation, setGeolocation] = useRecoilState(GeolocationAtom);
  const history = useHistory();
  const { setStoryPlace } = useStoryState();
  const { value, onChangeValue } = useInput();

  const searchPlaceCb = (data: IPlace[], status: string) => {
    if (status === 'OK') setPlaceList(data);
    else if (status === 'ZERO_RESULT') setPlaceList([]);
  };

  const getSearchOption = () => ({
    x: geolocation.longitude,
    y: geolocation.latitude,
  });

  const onClickCustomPlace = () => {
    setStoryPlace({ place: { name: value, latitude: 0, longitude: 0 } });
    history.push('/add');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setGeolocation({ latitude, longitude });
      });
    }
  }, [setGeolocation]);

  useEffect(() => {
    const ps = new window.kakao.maps.services.Places();
    if (value.trim()) ps.keywordSearch(value, searchPlaceCb, getSearchOption());
  }, [value]);

  return (
    <>
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
          selectCustomKeyword={() => onClickCustomPlace()}
          categoryText={'장소'}
        />
      )}
    </>
  );
};

export default PlaceSearch;
