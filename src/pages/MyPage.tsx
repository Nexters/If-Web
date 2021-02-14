import React, { FC } from 'react';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import styled from 'styled-components';
import { UsernameRow, AccountRow, ActionRow } from '@/components/MyPage';
import Header from './Header';

// TODO: /users 경로로 이름 + 소셜 정보 가져오기
const usernameState = '방구석 여행러';
const socialState = 'kakao';

const MyPage: FC = () => {
  const handleDeleteAccount = () => {
    // TODO: 탈퇴
    alert('DELETE ACCOUNT');
  };

  return (
    <Layout>
      <Header type={HEADER_TYPES.MY_PAGE} />
      <MyPageContainer>
        <UsernameRow username={usernameState} />
        <AccountRow social={socialState} />

        <Line />

        {/* TODO: 이메일 계정 확인하기 */}
        <a href="mailto:danakim21@gmail.com?subject=If 개발자에게 피드백 보내기">
          <ActionRow title={'피드백 남기기'} />
        </a>
        <ActionRow title={'탈퇴하기'} onClickFunction={handleDeleteAccount} />
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

export default MyPage;
