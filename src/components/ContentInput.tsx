import React, { FC } from 'react';
import { IStoryState } from '@/types';
import { RecoilState, useRecoilState } from 'recoil';
import styled from 'styled-components';

interface IContentInputProps {
  storyAtom: RecoilState<IStoryState>;
}

const ContentInput: FC<IContentInputProps> = ({ storyAtom }) => {
  const [storyState, setStoryState] = useRecoilState(storyAtom);

  const onChangeContent = (value: string) =>
    setStoryState({
      ...storyState,
      memo: value,
    });

  return (
    <>
      <Line />
      <TextArea
        value={storyState.memo}
        onChange={({ target }) => onChangeContent(target.value)}
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
