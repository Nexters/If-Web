import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoryImage } from '@/atoms/storyState';
import { IImage } from '@/types';
import DeleteButton from './DeleteButton';
import AddImage from './AddImage';

interface IImageInputProps {
  image?: IImage;
  index: number;
}

const ImageInput: FC<IImageInputProps> = ({ image }) => {
  const [imageState, setImageState] = useState({ file: null, img: image?.url });
  const { setStoryImageState } = useStoryImage();

  useEffect(() => {
    if (image?.url !== imageState.img) {
      console.log(imageState.file);
      setStoryImageState({ file: imageState.file, image: imageState.img });
    }
  }, [imageState, image, setStoryImageState]);

  return (
    <ImageWrapper>
      {image ? (
        <>
          <DeleteButton />
          <Image src={imageState.img} />
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
