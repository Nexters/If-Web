import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';

const TitleInput: FC = () => {
  const { storyState, setStoryState } = useStoryState();

  return (
    <Input
      placeholder="제목을 입력해주세요 :)"
      onChange={({ target: { value } }) =>
        setStoryState({ field: 'title', value })
      }
      value={storyState.title}
    ></Input>
  );
};

export default TitleInput;

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
