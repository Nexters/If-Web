import React, { FC } from 'react';
import styled from 'styled-components';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';
import Icon from './FeatureIcon';

interface ILocationInputProps {
  location: string;
}

const LocationInput: FC<ILocationInputProps> = (props) => {
  const { location } = props;
  const onChangeMode = useChangeViewMode(AddContentViewMode.FIND_PLACE);

  return (
    <Wrapper onClick={onChangeMode}>
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
