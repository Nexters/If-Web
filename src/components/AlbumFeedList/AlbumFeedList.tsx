import React from 'react';
import { useParams } from 'react-router-dom';

interface IParamTypes {
  name: string;
}

const AlbumFeedList = () => {
  const { name } = useParams<IParamTypes>();
  return <div>{name}</div>;
};

export default AlbumFeedList;
