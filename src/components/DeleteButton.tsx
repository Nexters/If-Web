import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryImage } from '@/atoms/storyState';
import Icon from './FeatureIcon';

interface IDeleteButtonProps {
  index: number;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ index }) => {
  const { deleteImage } = useStoryImage();
  return (
    <ButtonWrapper onClick={() => deleteImage({ index })}>
      <Icon
        className="icon"
        name="cancel"
        style={{ width: '14px', height: '14px' }}
      />
    </ButtonWrapper>
  );
};

export default DeleteButton;

const ButtonWrapper = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.borders.normal};
  border-radius: 100%;
`;
