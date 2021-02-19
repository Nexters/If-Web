import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import LoginIcon from '@/components/LoginIcon';
import request from '@/utils/request';
import axios from 'axios';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoButton: FC = () => {
  const { Kakao } = window;

  const history = useHistory();

  const KAKAO_KEY = String(process.env.KAKAO_KEY);
  // const KAKAO_REST_API_KEY = String(process.env.KAKAO_REST_API_KEY);
  // const REDIRECT_URI = 'http://52.79.196.61:6150/users/login/kakao';

  useEffect(() => {
    Kakao.init(KAKAO_KEY);
    // 연결되었는지 확인
    // console.log(Kakao.isInitialized());
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
      localStorage.setItem('token', tokenInformation.access_token);
      history.push('/');
    }
  };

  const kakaoFail = (res: any) => {
    console.log(res);
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
  width: 87.2% !important;
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
