import React, { FC } from 'react';
import styled from 'styled-components';

interface IImageInputProps {
  image?: string;
}

const Image: FC<IImageInputProps> = ({ image }) => {
  return (
    <ImageWrapper>
      <ImageContent src={image} />
    </ImageWrapper>
  );
};

export default Image;

const ImageWrapper = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  flex: 0 0 auto;
  margin: 6px 8px 0 0;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
`;

const ImageContent = styled.img`
  width: 270px;
  height: 270px;
`;
