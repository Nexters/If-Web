import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import Title from '@/components/Title';
import Place from '@/components/Place';
import Country from '@/components/Country';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';
import PlaceSearch from '@/components/PlaceSearch';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import NationSearch from '@/components/NationSearch';
import { StoryFormData, StoryFormCondition } from '@/atoms/storyState';
import useQueryString from '@/hooks/useQueryString';
import { multiRequest } from '@/utils/request';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Header from './Header';

const EditStory: FC = () => {
  const sendedData = useRecoilValue(StoryFormData);
  const isAvailabe = useRecoilValue(StoryFormCondition);
  const { path } = useRouteMatch();
  const history = useHistory();
  const qs = useQueryString();

  const onClickEditButton = async () => {
    if (!isAvailabe) return;
    const result = await multiRequest({
      method: 'PATCH',
      url: '/stories',
      data: sendedData,
    });
    if (result) history.push('/');
  };

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <div>
            <Header
              completed={isAvailabe}
              type={HEADER_TYPES.ADD_EDIT}
              primaryFunction={onClickEditButton}
            />
            <Title type={COMPONENT_TYPES.INPUT} />
            <Place type={COMPONENT_TYPES.INPUT} />
            <Country type={COMPONENT_TYPES.INPUT} />
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

export default EditStory;
