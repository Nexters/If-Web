import React, { FC } from 'react';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';
import LoginIcon from '@/components/LoginIcon';
import { useHistory } from 'react-router-dom';
import Header from './Header';

// axios로 수정하기
const usernameState = '방구석 여행러';

const MyPage: FC = () => {
  const history = useHistory();

  const username = usernameState;

  const handleEditClick = () => {
    history.push('/myPage/edit');
  };

  const handleLogout = () => {
    alert('LOGOUT');
  };

  const handleDeleteAccount = () => {
    alert('DELETE ACCOUNT');
  };

  return (
    <Layout>
      <Header type={HEADER_TYPES.MY_PAGE} />
      <MyPageContainer>
        <UsernameRow>
          <Username>{username}</Username>
          <EditIcon
            onClick={handleEditClick}
            onKeyPress={handleEditClick}
            role="button"
            tabIndex={0}
          >
            <FeatureIcon name={'edit'} />
          </EditIcon>
        </UsernameRow>
        <AccountRow>
          <div>
            <LoginIcon name={'kakao'} />
            <p>카카오 계정 로그인</p>
          </div>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </AccountRow>
        <Line />

        {/* 이메일 계정 확인하기 */}
        <a href="mailto:danakim21@gmail.com?subject=If 개발자에게 피드백 보내기">
          <ActionRow>
            <p>피드백 남기기</p>
            <FeatureIcon name={'arrow2'} />
          </ActionRow>
        </a>

        <ActionRow onClick={handleDeleteAccount}>
          <p>탈퇴하기</p>
          <FeatureIcon name={'arrow2'} />
        </ActionRow>
      </MyPageContainer>
    </Layout>
  );
};

const MyPageContainer = styled.div`
  margin-top: 26px;
`;

const UsernameRow = styled.div`
  display: flex;
`;

const Username = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.title01};
  line-height: 30px;
`;

const EditIcon = styled.div`
  margin-left: 8px;
  line-height: 30px;
  cursor: pointer;
  outline: none;
`;

const AccountRow = styled.div`
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

const Line = styled.hr`
  color: ${({ theme }) => theme.colors.lightgray};
  margin: 25px 0;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  cursor: pointer;

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.caption01};
    line-height: 28px;
  }
  svg {
    margin-top: 3px;
  }
`;

export default MyPage;
