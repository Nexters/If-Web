import React, { FC, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoryImage } from '@/atoms/storyState';
import { IImage } from '@/types';
import DeleteButton from './DeleteButton';
import AddImage from './AddImage';

interface IImageInputProps {
  image?: IImage;
  index: number;
}

const ImageInput: FC<IImageInputProps> = ({ image, index }) => {
  const [imageState, setImageState] = useState({ file: {}, img: image?.url });
  const viewImage = useRef<HTMLImageElement>(null);
  const { setStoryImageState } = useStoryImage();

  useEffect(() => {
    if (image?.url !== imageState.img)
      setStoryImageState({ image: imageState.img });
  }, [imageState, image, setStoryImageState]);

  return (
    <ImageWrapper>
      {image ? (
        <>
          <DeleteButton />
          <Image src={imageState.img} ref={viewImage} />
        </>
      ) : (
        <AddImage setImageState={setImageState} />
      )}
    </ImageWrapper>
  );
};

export default ImageInput;

const ImageWrapper = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  flex: 0 0 auto;
  margin: 6px 8px 0 0;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
`;

const Image = styled.img`
  width: 116px;
  height: 116px;
`;
