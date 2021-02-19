import React, { FC, useState, useRef } from 'react';
import Layout from '@/components/Layout';
import HEADER_TYPES from '@/types/HeaderTypes';
import styled from 'styled-components';
import CancelIcon from '@/components/CancelIcon';
import request from '@/utils/request';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const MyPageEdit: FC = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [complete, setComplete] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setUsernameInput(e.target.value);
    }
    if (e.target.value.length === 0) {
      setComplete(false);
    } else {
      setComplete(true);
    }
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  };

  const handleComplete = async () => {
    // TODO: CORS로 추정되는 문제 해결하기 (403 에러)
    const res = await request({
      url: '/users',
      method: 'PUT',
      data: { name: usernameInput },
    });
    if (res.name === usernameInput) {
      history.push('/myPage');
    }
  };

  const handleCancelClick = () => {
    setUsernameInput('');
    setComplete(false);
  };

  return (
    <Layout>
      <Header
        type={HEADER_TYPES.MY_PAGE_EDIT}
        completed={complete}
        primaryFunction={handleComplete}
      />
      <div>
        <Input
          type="text"
          value={usernameInput}
          onChange={handleUsernameChange}
          placeholder={'이름을 입력하세요. (최대 10글자)'}
          ref={usernameInputRef}
          maxLength={10}
        />
        {complete && <CancelIcon handleCancelClick={handleCancelClick} />}
      </div>
      {complete && <Count>{usernameInput.length} / 10</Count>}
    </Layout>
  );
};

const Input = styled.input`
  margin-top: 24px;
  padding-bottom: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkbrown};
  outline: none;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.title03};
  line-height: 30px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;

const Count = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.caption01};
  line-height: 28px;
`;

export default MyPageEdit;
