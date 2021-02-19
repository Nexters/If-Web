import React, { FC, useEffect, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import Layout from '@/components/Layout';
import Story from '@/components/Story';
import AddButton from '@/components/AddButton';
import { StoryStateAtom } from '@/atoms/storyState';
import HEADER_TYPES from '@/types/HeaderTypes';
import request from '@/utils/request';
import Header from './Header';

const Main: FC = () => {
  const resetStoryState = useResetRecoilState(StoryStateAtom);
  const [storyList, setStoryList] = useState([]);

  const getStoryList = async () => {
    const data = await request({
      url: '/stories',
      method: 'GET',
    });
    setStoryList(data);
  };

  useEffect(() => {
    resetStoryState();
    getStoryList();
  }, []);

  const initialData = {
    id: null,
    date: new Date().toString(),
    memo: '식사하셨어요?',
    picture_list: [],
  };

  return (
    <Layout>
      <Header type={HEADER_TYPES.FEED} />
      {storyList.length > 0 ? (
        storyList.map((story, idx) => {
          const { id } = story;
          const pos = idx % 2 === 0 ? 'left' : 'right';
          return <Story key={id} position={pos} {...story} />;
        })
      ) : (
        <Story key={0} position="left" {...initialData} isEmpty={true} />
      )}
      <AddButton />
    </Layout>
  );
};

export default Main;
