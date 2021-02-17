import React, { FC, useState } from 'react';
import styled from 'styled-components';
import LoginIcon from '@/components/LoginIcon';
import LogoutModal from '@/components/MyPage/LogoutModal';
import LOGIN_TYPES from '@/types/LoginTypes';

interface AccountRowProps {
  social: string;
}

const AccountRow: FC<AccountRowProps> = ({ social }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleModalClose = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <Wrapper>
        <div>
          {social === LOGIN_TYPES.KAKAO && (
            <>
              <LoginIcon name={'kakao'} />
              <p>카카오 계정 로그인</p>
            </>
          )}

          {social === LOGIN_TYPES.NAVER && (
            <>
              <LoginIcon name={'naver'} />
              <p>네이버 계정 로그인</p>
            </>
          )}
        </div>
        <LogoutButton onClick={handleLogoutClick}>로그아웃</LogoutButton>
      </Wrapper>
      {/* 로그아웃 모달 */}
      <LogoutModal
        isOpen={showLogoutModal}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    p {
      margin-left: 4px;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSizes.caption02};
      line-height: 24px;
    }
  }
`;

const LogoutButton = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.caption03};
  line-height: 20px;
  cursor: pointer;
`;

export default AccountRow;
