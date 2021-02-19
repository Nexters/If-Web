import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import LoginIcon from '@/components/LoginIcon';
import request from '@/utils/request';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoButton: FC = () => {
  const { Kakao } = window;
  const history = useHistory();
  const KAKAO_KEY = String(process.env.KAKAO_KEY);
  // 300일
  const JWT_EXPIRATION = 300 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_KEY);
    }
  }, []);

  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: kakaoSuccess,
      fail: kakaoFail,
    });
  };

  const kakaoSuccess = async (res: any) => {
    const tokenInformation = await request({
      url: `/users/login/kakao/tokens?token=${res.access_token}&tokenType=bearer`,
      method: 'GET',
    });

    if (tokenInformation.access_token) {
      const { access_token, refresh_token } = tokenInformation;
      localStorage.setItem('token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      history.push('/');
      setTimeout(() => {
        silentRefresh();
      }, JWT_EXPIRATION);
    }
  };

  const kakaoFail = (res: any) => {
    console.log(res);
  };

  const silentRefresh = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      const tokenInformation = await request({
        url: '/users/token/refresh',
        method: 'POST',
        data: { refresh_token: refreshToken },
      });
      localStorage.setItem('token', tokenInformation.access_token);
      localStorage.setItem('refresh_token', tokenInformation.refresh_token);
    }
  };

  return (
    <KakaoContainer
      onClick={handleKakaoLogin}
      onKeyPress={handleKakaoLogin}
      role="button"
      tabIndex={0}
    >
      <KakaoContent />
    </KakaoContainer>
  );
};

const KakaoContent = () => {
  return (
    <Content>
      <LoginIcon name={'kakao'} />
      <KakaoText>카카오로 로그인하기</KakaoText>
    </Content>
  );
};

const KakaoContainer = styled.div`
  margin: 0 auto 16px auto !important;
  width: 100% !important;
  height: 48px !important;
  background-color: #fee500 !important;
  color: ${(props) => props.theme.colors.darkbrown} !important;
  border-radius: 0 !important;
  border: 0 !important;
  cursor: pointer !important;
  text-align: left !important;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 48px;
  outline: none;
`;

const Content = styled.div`
  svg {
    position: absolute;
    margin-left: 5.5%;
    margin-top: 14px;
  }
`;

const KakaoText = styled.p`
  text-align: center;
`;

export default KakaoButton;
