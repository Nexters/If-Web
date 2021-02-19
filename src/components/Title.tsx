import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import TitleInput from './TitleInput'
import COMPONENT_TYPES from '@/types/ComponentTypes';

interface ITitleProps {
  type: COMPONENT_TYPES;
}

const Title: FC<ITitleProps> = ({ type }) => {
  const { storyState } = useStoryState();
  return (
      <>
      {type === COMPONENT_TYPES.PLAIN ? <TitleText>{storyState.title}</TitleText> : <TitleInput/> }
      </>
  )
};

export default Title;

const TitleText = styled.div`
  width: 100%;
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 30px;
`;
