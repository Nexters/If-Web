import React, { FC, useEffect } from 'react';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import Title from '@/components/Title';
import Place from '@/components/Place';
import Country from '@/components/Country';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';
import useAddContent from '@/hooks/useAddContent';
import PlaceSearch from '@/components/PlaceSearch';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import NationSearch from '@/components/NationSearch';
import { StoryStateAtom, StoryFormData } from '@/atoms/storyState';
import useQueryString from '@/hooks/useQueryString';
import { multiRequest } from '@/utils/request';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Header from './Header';

const AddContent: FC = () => {
  const sendedData = useRecoilValue(StoryFormData);
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { path } = useRouteMatch();
  const history = useHistory();
  const { country, changeCountry } = useAddContent();
  const qs = useQueryString();

  const onClickCreateButton = async () => {
    const result = await multiRequest({
      method: 'POST',
      url: '/stories',
      data: sendedData,
    });
    if (result) history.push('/');
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
    <Layout>
      <Switch>
        <Route exact path={path}>
          <div>
            <Header
              type={HEADER_TYPES.ADD_EDIT}
              primaryFunction={onClickCreateButton}
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

export default AddContent;
