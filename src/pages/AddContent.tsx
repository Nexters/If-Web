import React, { FC, useState } from 'react';
import { atom, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import HEADER_TYPES from '@/types/HeaderTypes';
import TitleInput from '@/components/TitleInput';
import LocationText from '@/components/LocationText';
import NationText from '@/components/NationText';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';
import useAddContent from '@/hooks/useAddContent';
import PlaceSearch from '@/components/PlaceSearch';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NationSearch from '@/components/NationSearch';
import Header from './Header';

const imageList = atom({
  key: 'imageList',
  default: [],
});

const AddContent: FC = () => {
  const { path } = useRouteMatch();
  const { nation } = useAddContent();
  const [location, setLocation] = useState('음식을 먹은 장소');
  const imageListData = useRecoilValue(imageList);

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <AddContentWrapper>
            <Header type={HEADER_TYPES.ADD_EDIT} />
            <TitleInput />
            <LocationText location={location} />
            <NationText nation={nation} />
            <ImageList imageList={imageListData} />
            <ContentInput />
          </AddContentWrapper>
        </Route>
        <Route path={`${path}/place`}>
          <PlaceSearch />
        </Route>
        <Route path={`${path}/nation`}>
          <NationSearch />
        </Route>
      </Switch>
    </>
  );
};

export default AddContent;

const AddContentWrapper = styled.div`
  padding: 0 24px;
`;
