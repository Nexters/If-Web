import React, { FC } from 'react';
import { useStoryState } from '@/atoms/storyState';
import styled from 'styled-components';

const ContentInput: FC = () => {
  const { storyState, setStoryState } = useStoryState();
  return (
    <>
      <Line />
      <TextArea
        value={storyState.memo}
        onChange={({ target: { value } }) =>
          setStoryState({ field: 'memo', value })
        }
        placeholder="무엇을 드셨나요?"
      ></TextArea>
    </>
  );
};

export default ContentInput;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: 0;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 35px;
  resize: none;
  outline: none;
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
