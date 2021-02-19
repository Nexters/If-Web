import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useStoryState } from '@/atoms/storyState';
import COMPONENT_TYPES from '@/types/ComponentTypes';
import Icon from './FeatureIcon';

interface IPlaceProps {
  type: COMPONENT_TYPES;
}

const Place: FC<IPlaceProps> = ({ type }) => {
  const { storyState } = useStoryState();
  const { url } = useRouteMatch();
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    if (type === COMPONENT_TYPES.INPUT) history.push(`${url}/place`);
  }, [history, url]);

  return (
    <Wrapper onClick={onChangeHistory}>
      <Icon name="location" />
      <PlaceText>{storyState.placeName || '음식을 먹은 장소'}</PlaceText>
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
