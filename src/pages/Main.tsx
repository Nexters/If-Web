import React, { FC } from 'react';
import Story from '@/components/Story';
import AddButton from '@/components/AddButton';

const Main: FC = () => {
  return (
    <>
      <Story position="left" date="2021-01-30" memo="test" />
      <AddButton />
    </>
  );
};

export default Main;
