import React, { FC } from 'react';
import request from '@/utils/request';
import { useHistory } from 'react-router-dom';
import ActionModal from './ActionModal';

interface LogoutModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ isOpen, handleModalClose }) => {
  const history = useHistory();

  const handleLogout = async () => {
    // TODO: CORS로 추정되는 문제 해결하기 (403 에러)
    // const res = await request({
    //   url: '/users/logout',
    //   method: 'POST',
    // });
    // console.log(res);
    handleModalClose();
    localStorage.removeItem('token');
    history.push('/login');
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
