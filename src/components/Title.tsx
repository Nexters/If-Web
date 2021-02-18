import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';

const Title: FC = () => {
  const { storyState } = useStoryState();
  return <TitleText>{storyState.title}</TitleText>;
};

export default Title;

const TitleText = styled.div`
  width: 100%;
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 30px;
`;
