import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import ImageInput from './ImageInput';
import Image from './Image';

interface IImageListProps {
  type: 'INPUT' | 'PLAIN';
}

const ImageList: FC<IImageListProps> = (props) => {
  const { type } = props;
  const { storyState } = useStoryState();
  return (
    <ImageListWrapper>
      {storyState.images.map((image, idx) => {
        if (type === 'INPUT')
          return <ImageInput key={idx} index={idx} image={image} />;
        return <Image key={idx} image={image} />;
      })}
      {type === 'INPUT' && <ImageInput index={storyState.images.length} />}
    </ImageListWrapper>
  );
};

const ImageListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export default ImageList;
