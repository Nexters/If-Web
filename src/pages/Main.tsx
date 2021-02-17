import React, { FC, useEffect, useState } from 'react';
import Story from '@/components/Story';
import AddButton from '@/components/AddButton';
import HEADER_TYPES from '@/types/HeaderTypes';
import request from '@/utils/request';
import Header from './Header';

const Main: FC = () => {
  const [storyList, setStoryList] = useState([]);

  const getStoryList = async () => {
    const data = await request({
      url: '/stories',
      method: 'GET',
    });
    setStoryList(data);
  };

  useEffect(() => {
    getStoryList();
  }, []);

  const initialData = {
    id: null,
    date: new Date().toString(),
    memo: '식사하셨어요?',
    picture_list: [],
  };

  return (
    <>
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
    </>
  );
};

export default Main;
