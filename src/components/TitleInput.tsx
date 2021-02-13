import React, { FC } from 'react';
import styled from 'styled-components';
import { RecoilState, useRecoilState } from 'recoil';
import { IStoryState } from '@/types';

interface ITitleInputProps {
  storyAtom: RecoilState<IStoryState>;
}

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

const TitleInput: FC<ITitleInputProps> = ({ storyAtom }) => {
  const [storyState, setStoryState] = useRecoilState(storyAtom);

  const onChangeTitle = (value: string) =>
    setStoryState({ ...storyState, title: value });

  return (
    <Input
      placeholder="제목을 입력해주세요 :)"
      onChange={(e) => onChangeTitle(e.target.value)}
      value={storyState.title}
    ></Input>
  );
};

export default TitleInput;
