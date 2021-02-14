import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import Icon from './FeatureIcon';

const LocationInput: FC = () => {
  const { storyState, setStoryState } = useStoryState();

  return (
    <Wrapper>
      <Icon name="location" />
      <LocationText>{storyState.place || '음식을 먹은 장소'}</LocationText>
      <Text>에서 느낀</Text>
    </Wrapper>
  );
};

export default LocationInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Text = styled.span`
  font-size: 14px;
  opacity: 0.3;
`;

const LocationText = styled.span`
  margin: 0 4px 0 8px;
  cursor: pointer;
`;
