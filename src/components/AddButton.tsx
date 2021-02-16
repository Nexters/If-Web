import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './FeatureIcon';

const ButtonWrapper = styled.div`
  position: absolute;
  height: 72px;
  bottom: 0;
  right: 0;
`;

const AddButton: FC = () => {
  return (
    <Link to="/add">
      <ButtonWrapper>
        <Icon name="add" />
      </ButtonWrapper>
    </Link>
  );
};

export default AddButton;
