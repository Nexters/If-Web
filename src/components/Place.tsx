import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Icon from './FeatureIcon';

interface IPlaceProps {
  type: 'INPUT' | 'PLAIN';
}

const Place: FC<IPlaceProps> = ({ type }) => {
  const { storyState } = useStoryState();
  const { url } = useRouteMatch();
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    if (type === 'INPUT') history.push(`${url}/place`);
  }, [history, url]);

  return (
    <Wrapper onClick={onChangeHistory}>
      <Icon name="location" />
      <PlaceText>{storyState.place || '음식을 먹은 장소'}</PlaceText>
      <Text>에서 느낀</Text>
    </Wrapper>
  );
};

export default Place;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Text = styled.span`
  font-size: 14px;
  opacity: 0.3;
`;

const PlaceText = styled.span`
  margin: 0 4px 0 8px;
  cursor: pointer;
`;
