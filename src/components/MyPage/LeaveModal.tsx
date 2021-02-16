import React, { FC } from 'react';
import ActionModal from './ActionModal';

interface LeaveModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
  username: string;
}

const LeaveModal: FC<LeaveModalProps> = ({
  isOpen,
  handleModalClose,
  username,
}) => {
  const handleLeave = () => {
    // TODO: /Leave 경로 & /login으로 이동?
    alert('Leave');
    handleModalClose();
  };

  return (
    <ActionModal
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      bodyText={[
        `${username}님의`,
        '모든 기록들이 영영 사라져요.',
        '정말 탈퇴하시겠어요?',
      ]}
      buttonText={'탈퇴할게요'}
      actionFunction={handleLeave}
    />
  );
};

export default LeaveModal;
