import React, { FC, useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import HEADER_TYPES from '@/types/HeaderTypes';
import TitleInput from '@/components/TitleInput';
import Place from '@/components/Place';
import Nation from '@/components/Nation';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';
import useAddContent from '@/hooks/useAddContent';
import PlaceSearch from '@/components/PlaceSearch';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NationSearch from '@/components/NationSearch';
import { StoryStateAtom } from '@/atoms/storyState';
import useQueryString from '@/hooks/useQueryString';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Header from './Header';

const AddContent: FC = () => {
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { path } = useRouteMatch();
  const { nation, changeNation } = useAddContent();
  const qs = useQueryString();

  useEffect(() => {
    const nation = qs.get('nation');
    if (qs.get('nation')) {
      // TODO: changeNation에 필요한 정보 넣어주기
      // changeNation({});
    }
  }, [qs, changeNation]);

  useEffect(() => {
    return () => resetStoryState();
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <div>
            <Header type={HEADER_TYPES.ADD_EDIT} />
            <TitleInput />
            <Place type={COMPONENT_TYPES.INPUT} />
            <Nation type={COMPONENT_TYPES.INPUT} nation={nation} />
            <ImageList type={COMPONENT_TYPES.INPUT} />
            <ContentInput />
          </div>
        </Route>
        <Route path={`${path}/place`}>
          <PlaceSearch />
        </Route>
        <Route path={`${path}/nation`}>
          <NationSearch />
        </Route>
      </Switch>
    </Layout>
  );
};

export default AddContent;
