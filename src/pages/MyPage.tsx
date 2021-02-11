import React, { FC, useState } from 'react';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';
import { atom, useRecoilValue } from 'recoil';
import Header from './Header';

// 이 부분은 나중에 로그인으로 이동
const usernameState = atom({
  key: 'username',
  default: '방구석 여행러',
});

enum STATUS {
  VIEW,
  INCOMPLETE,
  COMPLETE,
}

const MyPage: FC = () => {
  const username = useRecoilValue(usernameState);
  const [currentStatus, setCurrentStatus] = useState(STATUS.VIEW);
  const [usernameInput, setUsernameInput] = useState('');

  const handleEditClick = () => {
    setCurrentStatus(STATUS.INCOMPLETE);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
    if (e.target.value.length === 0) {
      setCurrentStatus(STATUS.INCOMPLETE);
    } else {
      setCurrentStatus(STATUS.COMPLETE);
    }
  };

  return (
    <Layout>
      {/* View Page */}
      {currentStatus === STATUS.VIEW && (
        <>
          <Header type={HEADER_TYPES.MY_PAGE} />
          <MyPageContainer>
            <Username>{username}</Username>
            <EditIcon
              onClick={handleEditClick}
              onKeyPress={handleEditClick}
              role="button"
              tabIndex={0}
            >
              <FeatureIcon name={'edit'} />
            </EditIcon>
          </MyPageContainer>
        </>
      )}

      {currentStatus === STATUS.INCOMPLETE && (
        <>
          <Header type={HEADER_TYPES.ADD_EDIT} completed={false} />
          <input
            type="text"
            value={usernameInput}
            onChange={handleUsernameChange}
            placeholder={'이름을 입력하세요. (최대 10글자)'}
          />
        </>
      )}
      {currentStatus === STATUS.COMPLETE && (
        <>
          <Header type={HEADER_TYPES.ADD_EDIT} completed={true} />
          <input
            type="text"
            value={usernameInput}
            onChange={handleUsernameChange}
            placeholder={'이름을 입력하세요. (최대 10글자)'}
          />
        </>
      )}
    </Layout>
  );
};

const MyPageContainer = styled.div`
  margin-top: 26px;
  display: flex;
`;

const Username = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
`;

const EditIcon = styled.div`
  margin-left: 8px;
  line-height: 30px;
  cursor: pointer;
  outline: none;
`;

export default MyPage;
