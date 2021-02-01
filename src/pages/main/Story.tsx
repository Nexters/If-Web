import React, { FC } from 'react';
import styled from 'styled-components';
import { getFormattedDate } from '@/utils/formatter';
import { IStoryProps } from './interface';

const StoryWrapper = styled.div<{ position: string }>`
  width: 220px;
  height: 282px;
  margin: ${(props) =>
    props.position === 'left' ? '0 auto 60px 24px' : '0 24px 60px auto'};
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
  background-color: ${(props) => props.theme.colors.white};
`;

const PictureWrapper = styled.div`
  height: 196px;
  margin-bottom: 12px;
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
`;

const Date = styled.div`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.1em;
`;

const Memo = styled.span`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.darkgray};
`;

const Story: FC<IStoryProps> = (props) => {
  const { date, memo, position } = props;
  return (
    <StoryWrapper position={position}>
      <PictureWrapper></PictureWrapper>
      <Date>{getFormattedDate(date)}</Date>
      <Memo>{memo}</Memo>
    </StoryWrapper>
  );
};

export default Story;
