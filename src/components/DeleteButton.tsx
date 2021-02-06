import React, { FC } from 'react';
import styled from 'styled-components';
import CancelIcon from '@assets/cancel.svg';

const ButtonWrapper = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  display: flex;
  justify-content: center;
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.borders.normal};
  border-radius: 100%;
`;

const Icon = styled.img``;

const DeleteButton: FC = () => {
  return (
    <ButtonWrapper>
      <Icon src={CancelIcon} />
    </ButtonWrapper>
  );
};

export default DeleteButton;
