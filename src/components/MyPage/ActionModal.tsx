import React, { FC } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

interface ActionModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
  bodyText: string;
  buttonText: string;
  actionFunction: () => void;
}

const ActionModal: FC<ActionModalProps> = ({
  isOpen,
  handleModalClose,
  bodyText,
  buttonText,
  actionFunction,
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      ariaHideApp={false}
    >
      <p>{bodyText}</p>
      <button onClick={handleModalClose}>아니요</button>
      <button onClick={actionFunction}>{buttonText}</button>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  margin: 0 auto;
  height: 183px;
  max-width: 418.56px;
  width: 87.2%;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white2};

  .Overlay {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default ActionModal;
