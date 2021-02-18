import React, { FC } from 'react';
import { useStoryState } from '@/atoms/storyState';
import styled from 'styled-components';

const Content: FC = () => {
  const { storyState } = useStoryState();
  return (
    <>
      <Line />
      <Text>{storyState.memo}</Text>
    </>
  );
};

export default Content;

const Text = styled.div`
  max-height: 210px;
  padding: 0;
  font-size: 16px;
  line-height: 35px;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  color: ${(props) => props.theme.colors.lightgray};
`;
