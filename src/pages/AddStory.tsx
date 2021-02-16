import React, { FC, useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
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
import { StoryStateAtom } from '@/atoms/storyState';
import Header from './Header';

const AddContent: FC = () => {
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { path } = useRouteMatch();
  const { nation } = useAddContent();

  useEffect(() => {
    return () => resetStoryState();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <AddContentWrapper>
            <Header type={HEADER_TYPES.ADD_EDIT} />
            <TitleInput />
            <LocationText />
            <NationText nation={nation} />
            <ImageList />
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

const AddContentWrapper = styled.div`
  padding: 0 24px;
`;

export default AddContent;
