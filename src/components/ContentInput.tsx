import React, { FC } from 'react';
import styled from 'styled-components';

const Input = styled.textarea`
  width: 100%;
  min-height: 400px;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 35px;
  resize: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  color: ${(props) => props.theme.colors.lightgray};
`;

const ContentInput: FC = () => {
  return (
    <>
      <Line />
      <Input placeholder="무엇을 드셨나요?"></Input>
    </>
  );
};

export default ContentInput;
