import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
  const history = useHistory();

  const handleLeave = async () => {
    const accessToken = localStorage.getItem('token');
    const result = await axios({
      url: `/api/users`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (result.status === 200 || result.status === 202) {
      handleModalClose();
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      history.push('/myPage');
    }
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
