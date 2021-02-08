import React, { FC } from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

interface IImageInputProps {
  image?: string;
  // onDelete(): null
}

const ImageWrapper = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  flex: 0 0 auto;
  margin-right: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
`;

const ImageInput: FC<IImageInputProps> = () => {
  return (
    <ImageWrapper>
      <DeleteButton />
    </ImageWrapper>
  );
};

export default ImageInput;
