import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from './FeatureIcon';

interface ILocationInputProps {
  nation: number | null;
}

const LocationInput: FC<ILocationInputProps> = (props) => {
  const { nation } = props;
  return (
    <Wrapper>
      <Icon name="flag" />
      <LocationText>{nation || '여행한 나라'}</LocationText>
    </Wrapper>
  );
};

export default LocationInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  cursor: pointer;
`;

const LocationText = styled.span`
  margin-left: 8px;
  line-height: 28px;
`;
