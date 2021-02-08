import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from './FeatureIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  cursor: pointer;
`;

const InitialText = styled.span`
  line-height: 28px;
  color: ${(props) => props.theme.colors.darkgray};
`;

const LocationText = styled.span``;

interface ILocationInputProps {
  nation: number | null;
}

const LocationInput: FC<ILocationInputProps> = (props) => {
  const { nation } = props;
  return (
    <Wrapper>
      <Icon name="flag" />
      {nation ? (
        <LocationText>{nation}</LocationText>
      ) : (
        <InitialText>여행한 나라</InitialText>
      )}
    </Wrapper>
  );
};

export default LocationInput;
