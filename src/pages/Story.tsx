import React, { FC, useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import HEADER_TYPES from '@/types/HeaderTypes';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Place from '@/components/Place';
import Country from '@/components/Country';
import Content from '@/components/Content';
import ImageList from '@/components/ImageList';
import useAddContent from '@/hooks/useAddContent';
import { useRouteMatch } from 'react-router-dom';
import { StoryStateAtom, useStoryState } from '@/atoms/storyState';
import request from '@/utils/request';
import Header from './Header';

interface IMatchStoryParams {
  id: string;
}

const Story: FC = () => {
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const { setStoryDetail } = useStoryState();
  const { params } = useRouteMatch<IMatchStoryParams>();

  const getStoryDetail = async () => {
    const data = await request({
      url: `/stories/${params.id}`,
      method: 'GET',
    });
    setStoryDetail(data);
  };

  useEffect(() => {
    getStoryDetail();
    return () => resetStoryState();
  }, []);

  return (
    <Layout padding={'44px 24px'}>
      <Header type={HEADER_TYPES.DETAIL} />
      <Title />
      <Place type={COMPONENT_TYPES.PLAIN}  />
      <Country type={COMPONENT_TYPES.PLAIN} />
      <ImageList type={COMPONENT_TYPES.PLAIN} />
      <Content />
    </Layout>
  );
};

export default Story;
