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

  return (
    <>
      <Header type={HEADER_TYPES.FEED} />
      {storyList.map((story, idx) => {
        const { id } = story;
        const pos = idx % 2 === 0 ? 'left' : 'right';
        return <Story key={id} position={pos} {...story} />;
      })}
      <AddButton />
    </>
  );
};

export default Main;
