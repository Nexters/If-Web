import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import LoginIcon from '@/components/LoginIcon';

const KakaoButton: FC = () => {
  const history = useHistory();

  const KAKAO_KEY = String(process.env.KAKAO_KEY);

  const kakaoSuccess = (res: any) => {
    const { response } = res;
    localStorage.setItem('token', response.access_token);
    history.push('/');
  };

  const kakaoFail = (res: any) => {
    console.log(res);
    alert('문제가 생겼습니다. ');
  };

  return (
    <KakaoContainer
      token={KAKAO_KEY}
      needProfile={true}
      onSuccess={kakaoSuccess}
      onFail={kakaoFail}
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

const KakaoContainer = styled(KakaoLogin)`
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
  line-height: 28px;
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
