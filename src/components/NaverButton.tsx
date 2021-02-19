import React, { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';
import LoginIcon from '@/components/LoginIcon';
import styled from 'styled-components';
import request from '@/utils/request';

const { naver } = window as any;

const NaverButton: FC = () => {
  const location = useLocation();
  const NAVER_KEY = String(process.env.NAVER_KEY);

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  const handleButtonClick = () => {
    console.log('click');
    document.getElementById('naverIdLogin_loginButton')?.click();
  };

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_KEY,
      callbackUrl: 'http://localhost:3000/login',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 48,
      },
    });

    naverLogin.init();
  };

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
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
  width: 87.2%;
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
