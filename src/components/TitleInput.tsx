import React, { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin-bottom: 12px;
  border: none;
  background: none;
  font-size: 22px;
  line-height: 30px;
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

const TitleInput: FC = () => {
  return <Input placeholder="제목을 입력해주세요 :)"></Input>;
};

export default TitleInput;
