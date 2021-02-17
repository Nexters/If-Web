import React, { FC, useState } from 'react';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import styled from 'styled-components';
import { UsernameRow, AccountRow, ActionRow } from '@/components/MyPage';
import LOGIN_TYPES from '@/types/LoginTypes';
import LeaveModal from '@/components/MyPage/LeaveModal';
import { MyPageStateAtom } from '@/atoms/myPageState';
import { useRecoilValue } from 'recoil';
import Header from './Header';

// TODO: /users 경로로 이름 + 소셜 정보 가져오기
const usernameState = '테스터';
const socialState = LOGIN_TYPES.KAKAO;

const MyPage: FC = () => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const { parent } = useRecoilValue(MyPageStateAtom);

  const handleModalClose = () => {
    setShowLeaveModal(false);
  };

  const handleDeleteAccount = () => {
    setShowLeaveModal(true);
  };

  return (
    <Layout>
      <Header type={HEADER_TYPES.MY_PAGE} parentRoute={parent} />
      <MyPageContainer>
        <UsernameRow username={usernameState} />
        <AccountRow social={socialState} />

        <Line />

        {/* TODO: 이메일 계정 확인하기 */}
        <a href="mailto:danakim21@gmail.com?subject=If 개발자에게 피드백 보내기">
          <ActionRow title={'피드백 남기기'} />
        </a>
        <ActionRow title={'탈퇴하기'} onClickFunction={handleDeleteAccount} />
        <VersionInfo>
          <span>버전정보</span>
          <span>현재 1.0.0</span>
        </VersionInfo>
        <LeaveModal
          isOpen={showLeaveModal}
          handleModalClose={handleModalClose}
          username={usernameState}
        />
      </MyPageContainer>
    </Layout>
  );
};

const MyPageContainer = styled.div`
  margin-top: 26px;
`;

const Line = styled.hr`
  color: ${({ theme }) => theme.colors.lightgray};
  margin: 25px 0;
`;

const VersionInfo = styled.div`
  position: absolute;
  bottom: 0;
  height: 68px;
  color: ${({ theme }) => theme.colors.darkgray};
  font-weight: 400;
  font-size: 13px;
  line-height: 42px;

  span + span {
    margin-left: 7px;
  }
`;

export default MyPage;
