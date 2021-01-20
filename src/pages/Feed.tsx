import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Feed: FC = () => {
  return (
    <>
      <div>피드 페이지!!!</div>
      <Link to={'add'}>추가</Link>
    </>
  );
};

export default Feed;
