import React, { FC } from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import KakaoButton from '@/components/KakaoButton';
import NaverButton from '@/components/NaverButton';
import LoginIcon from '@/components/LoginIcon';

const Login: FC = () => {
  return (
    <Layout>
      <Logo>
        <LoginIcon name={'login'} />
      </Logo>
      <ButtonContainer>
        <KakaoButton />
        <NaverButton />
      </ButtonContainer>
    </Layout>
  );
};

const Logo = styled.div`
  text-align: center;
  margin-top: 219px;
  img {
    width: 175px;
    height: 175px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export default Login;
