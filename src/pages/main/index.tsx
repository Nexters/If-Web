import React, { FC } from 'react';
import Polaroid from './Polaroid';
import AddButton from './AddButton';

const Main: FC = () => {
  return (
    <>
      <Polaroid position="left" date="2021-01-30" memo="test" />
      <AddButton />
    </>
  );
};

export default Main;
