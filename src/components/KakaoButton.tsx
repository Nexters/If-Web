import React, { FC } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import LoginIcon from '@/components/LoginIcon';

const KakaoButton: FC = () => {
  const KAKAO_KEY = String(process.env.KAKAO_KEY);

  const kakaoSuccess = (res: any) => {
    console.log(res);
    // res.profile: properties (nickname, profile_image, thumbnail_image 등등)
    // res.response: access_token, refresh_token 등등
    // !!!!!!!!!!!!!!!! 서버랑 연결 작업하기 !!!!!!!!!!!!!!!!
  };

  const kakaoFail = () => {
    console.log('FAIL');
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
  width: 375px !important;
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

  // &:hover {
  // !!!!!!!!!!!!!!!! 디자이너분들한테 여쭤보기 !!!!!!!!!!!!!!!!
  // }
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
