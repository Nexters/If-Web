import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './FeatureIcon';

interface IAddButtonProps {
  nation?: string;
}

const AddButton: FC<IAddButtonProps> = ({ nation }) => {
  return (
    <Link to={`/add${nation ? `?nation=${nation}` : ''}`}>
      <ButtonWrapper>
        <Icon name="add" />
      </ButtonWrapper>
    </Link>
  );
};

export default AddButton;

const ButtonWrapper = styled.div`
  position: absolute;
  height: 72px;
  bottom: 0;
  right: 0;
`;
