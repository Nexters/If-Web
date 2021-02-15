import React, { FC } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

interface ActionModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
  bodyText: string[];
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
      shouldCloseOnOverlayClick={false}
    >
      {bodyText.map((text) => (
        <BodyText>{text}</BodyText>
      ))}
      <BottomWrapper>
        <button onClick={handleModalClose}>아니요</button>
        <button onClick={actionFunction}>{buttonText}</button>
      </BottomWrapper>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 32px 30px 24px 30px;
  margin: 0 auto;
  min-height: 185px;
  max-width: 418.56px;
  height: 22.5%;
  width: 87.2%;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white2};

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: red;
  }
`;

const BodyText = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.headline};
  line-height: 28px;
`;

const BottomWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

export default ActionModal;
