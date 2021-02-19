import React, { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';
import LoginIcon from '@/components/LoginIcon';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import request from '@/utils/request';

const { naver } = window as any;

const NaverButton: FC = () => {
  const location = useLocation();
  const history = useHistory();

  const NAVER_KEY = String(process.env.NAVER_KEY);
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login';

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  const handleButtonClick = () => {
    document.getElementById('naverIdLogin_loginButton')?.click();
  };

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_KEY,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 48,
      },
    });

    naverLogin.init();
  };

  const getNaverToken = async () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    const tokenInformation = await request({
      url: `/users/login/naver/tokens?token=${token}&tokenType=bearer`,
      method: 'GET',
    });
    const { access_token, refresh_token } = tokenInformation;
    localStorage.setItem('token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    history.push('/');
  };

  return (
    <>
      <div id="naverIdLogin" style={{ display: 'none' }} />
      <NaverContainer onClick={handleButtonClick}>
        <LoginIcon name={'naver2'} />
        <NaverText>네이버로 로그인하기</NaverText>
      </NaverContainer>
    </>
  );
};

const NaverContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #1ec800;
  height: 48px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 48px;
  outline: none;
  color: white;
  cursor: pointer;
  text-align: left;

  svg {
    position: absolute;
    margin-left: 5.5%;
    margin-top: 14px;
  }
`;

const NaverText = styled.p`
  text-align: center;
`;

export default NaverButton;
