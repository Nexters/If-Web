import React, { FC, useEffect, useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import HEADER_TYPES from '@/types/HeaderTypes';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Place from '@/components/Place';
import Country from '@/components/Country';
import Content from '@/components/Content';
import Date from '@/components/Date';
import ImageList from '@/components/ImageList';
import { StoryStateAtom, useStoryState } from '@/atoms/storyState';
import request from '@/utils/request';
import Header from './Header';

interface IMatchStoryParams {
  id: string;
}

const Story: FC = () => {
  const [isInvalidId, setIsInvalidID] = useState(false);
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { storyState, setStoryDetail } = useStoryState();
  const { params } = useRouteMatch<IMatchStoryParams>();
  const history = useHistory();

  const getStoryDetail = async () => {
    const data = await request({
      url: `/stories/${params.id}`,
      method: 'GET',
    });
    if (data) setStoryDetail(data);
    else setIsInvalidID(true);
  };

  const onClickDeleteButton = async () => {
    const data = await request({
      url: `/stories/${params.id}`,
      method: 'DELETE',
    });
    console.log(data);
    history.push('/');
  };

  useEffect(() => {
    getStoryDetail();
    return () => resetStoryState();
  }, []);

  return (
    <Layout padding={'44px 24px'}>
      {isInvalidId && <Redirect to="/" />}
      <Header type={HEADER_TYPES.DETAIL} deleteFunction={onClickDeleteButton} />
      <Date date={storyState.date} bigger={true} />
      <Title type={COMPONENT_TYPES.PLAIN} />
      <Place type={COMPONENT_TYPES.PLAIN} />
      <Country type={COMPONENT_TYPES.PLAIN} />
      <ImageList type={COMPONENT_TYPES.PLAIN} />
      <Content />
    </Layout>
  );
};

export default Story;
