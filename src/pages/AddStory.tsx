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
import {
  StoryStateAtom,
  StoryFormData,
  StoryFormCondition,
} from '@/atoms/storyState';
import useQueryString from '@/hooks/useQueryString';
import { multiRequest } from '@/utils/request';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import { useQuery } from 'react-query';
import { searchCountries } from '@/lib/api/searchCountries';
import Header from './Header';

const AddStory: FC = () => {
  const sendedData = useRecoilValue(StoryFormData);
  const isAvailabe = useRecoilValue(StoryFormCondition);
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { path } = useRouteMatch();
  const history = useHistory();
  const { changeCountry } = useAddContent();
  const qs = useQueryString();
  const { data } = useQuery(
    ['searchCountries', qs.get('nation')],
    searchCountries(qs.get('nation')),
    {
      enabled: !!qs.get('nation'),
    }
  );

  const onClickCreateButton = async () => {
    if (!isAvailabe) return;
    const result = await multiRequest({
      method: 'POST',
      url: '/stories',
      data: sendedData,
    });
    if (result) history.push('/');
  };

  useEffect(() => {
    const nationName = qs.get('nation');
    if (nationName) {
      if (data && data.length > 0) {
        changeCountry({
          id: data[0].id,
          name: data[0].name,
          type: data[0].type,
          imgUrl: data[0].flag_image_url,
        });
      } else if (!data || data.length === 0) {
        changeCountry({
          id: null,
          name: nationName,
          type: 'OTHER',
          imgUrl:
            'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg',
        });
      }
    } else {
      changeCountry({
        id: null,
        name: null,
        type: 'OTHER',
        imgUrl:
          'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg',
      });
    }
  }, [data]);

  useEffect(() => {
    return () => resetStoryState();
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <div>
            <Header
              completed={isAvailabe}
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

export default AddStory;
