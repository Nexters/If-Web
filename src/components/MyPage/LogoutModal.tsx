import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ActionModal from './ActionModal';

interface LogoutModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ isOpen, handleModalClose }) => {
  const history = useHistory();

  const handleLogout = async () => {
    const accessToken = localStorage.getItem('token');
    const result = await axios({
      url: `/api/users/logout`,
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (result.status === 200) {
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
