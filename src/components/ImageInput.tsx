import React, { FC, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoryImage } from '@/atoms/storyState';
import DeleteButton from './DeleteButton';
import AddImage from './AddImage';

interface IImageInputProps {
  image?: string;
  index: number;
}

const ImageInput: FC<IImageInputProps> = ({ image, index }) => {
  const [imageState, setImageState] = useState({ file: {}, imgUrl: image });
  const viewImage = useRef<HTMLImageElement>(null);
  const { setStoryImageState } = useStoryImage();

  useEffect(() => {
    if (image !== imageState.imgUrl)
      setStoryImageState({ image: imageState.imgUrl });
  }, [imageState, image, setStoryImageState]);

  return (
    <ImageWrapper>
      {image ? (
        <>
          <DeleteButton />
          <Image src={imageState.imgUrl} ref={viewImage} />
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
