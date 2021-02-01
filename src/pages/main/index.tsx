import React, { FC } from 'react';
import Story from './Story';
import AddButton from './AddButton';

const Main: FC = () => {
  return (
    <>
      <Story position="left" date="2021-01-30" memo="test" />
      <AddButton />
    </>
  );
};

export default Main;
