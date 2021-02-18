import React, { FC, useEffect } from 'react';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import HEADER_TYPES from '@/types/HeaderTypes';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Title from '@/components/Title';
import Place from '@/components/Place';
import Country from '@/components/Country';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';
import useAddContent from '@/hooks/useAddContent';
import PlaceSearch from '@/components/PlaceSearch';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NationSearch from '@/components/NationSearch';
import { StoryStateAtom, sendedStoryState } from '@/atoms/storyState';
import useQueryString from '@/hooks/useQueryString';
import request from '@/utils/request';
import Header from './Header';

const AddContent: FC = () => {
  const sendedData = useRecoilValue(sendedStoryState);
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { path } = useRouteMatch();
  const { country, changeCountry } = useAddContent();
  const qs = useQueryString();

  const onClickCreateButton = async () => {
    const result = await request({
      method: 'POST',
      url: '/stories',
      data: sendedData,
    });
    console.log(result);
  };

  useEffect(() => {
    const nation = qs.get('nation');
    if (qs.get('nation')) {
      // TODO: changeNation에 필요한 정보 넣어주기
      // changeNation({});
    }
  }, [qs, changeCountry]);

  useEffect(() => {
    return () => resetStoryState();
  }, []);

  return (
    <Layout padding={'44px 24px'}>
      <Switch>
        <Route exact path={path}>
          <AddContentWrapper>
            <Header
              type={HEADER_TYPES.ADD_EDIT}
              primaryFunction={onClickCreateButton}
            />
            <Title type={COMPONENT_TYPES.INPUT} />
            <Place type={COMPONENT_TYPES.INPUT} />
            <Country type={COMPONENT_TYPES.INPUT} />
            <ImageList type={COMPONENT_TYPES.INPUT} />
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
    </Layout>
  );
};

const AddContentWrapper = styled.div`
  padding: 0 24px;
`;

export default AddContent;
