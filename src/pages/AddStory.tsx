import React, { FC, useEffect } from 'react';
import Layout from '@/components/Layout';
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
import useQueryString from '@/hooks/useQueryString';
import Header from './Header';

const AddContent: FC = () => {
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

  return (
    <Layout padding={'44px 24px'}>
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
    </Layout>
  );
};

const AddContentWrapper = styled.div`
  // padding: 0 24px;
`;

export default AddContent;
