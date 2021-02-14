import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Icon from './FeatureIcon';

interface ILocationInputProps {
  location: string;
}

const LocationInput: FC<ILocationInputProps> = (props) => {
  const { location } = props;
  const { url } = useRouteMatch();
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    history.push(`${url}/place`);
  }, [history, url]);

  return (
    <Wrapper onClick={onChangeHistory}>
      <Icon name="location" />
      <LocationText>{location}</LocationText>
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
