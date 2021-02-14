import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import ImageInput from './ImageInput';

const ImageListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const ImageList: FC = () => {
  const { storyState } = useStoryState();
  return (
    <ImageListWrapper>
      {storyState.images.map((image, idx) => (
        <ImageInput key={idx} index={idx} image={image} />
      ))}
      <ImageInput index={storyState.images.length} />
    </ImageListWrapper>
  );
};

export default ImageList;
