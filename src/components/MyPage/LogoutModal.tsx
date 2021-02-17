import React, { FC } from 'react';
import ActionModal from './ActionModal';

interface LogoutModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ isOpen, handleModalClose }) => {
  const handleLogout = () => {
    // TODO: /logout 경로 & /login으로 이동?
    handleModalClose();
  };

  return (
    <ActionModal
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      bodyText={[
        '언제든지 다시',
        '기록하고 싶다면 찾아오세요!',
        '로그아웃 하시겠어요?',
      ]}
      buttonText={'로그아웃할게요'}
      actionFunction={handleLogout}
    />
  );
};

export default LogoutModal;
