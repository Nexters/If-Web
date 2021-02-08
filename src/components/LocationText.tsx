import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from './FeatureIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Text = styled.span`
  margin: 0px 4px;
  font-size: 14px;
  opacity: 0.3;
`;

const LocationText = styled.span`
  cursor: pointer;
`;

interface ILocationInputProps {
  location: string;
}

const LocationInput: FC<ILocationInputProps> = (props) => {
  const { location } = props;
  return (
    <Wrapper>
      <Icon name="location" />
      <LocationText>{location}</LocationText>
      <Text>에서 느낀</Text>
    </Wrapper>
  );
};

export default LocationInput;
