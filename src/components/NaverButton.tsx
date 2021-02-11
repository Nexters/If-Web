import React, { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const { naver } = window as any;

const NaverButton: FC = () => {
  const location = useLocation();

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'MOe1SdUK3tHmdcH3WyRx',
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
    console.log(location);
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log('Getting Token');
    console.log(token);
  };

  return <NaverContainer id="naverIdLogin" />;
};

const NaverContainer = styled.div`
  margin: 0 auto;
  width: 375px;

  img {
    width: 100%;
  }
`;

export default NaverButton;
