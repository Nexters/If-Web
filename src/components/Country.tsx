import React, { FC, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import COMPONENT_TYPES from '@/types/ComponentTypes';

interface INationTextProps {
  type: COMPONENT_TYPES;
}

const Country: FC<INationTextProps> = ({ type }) => {
  const { storyState } = useStoryState();
  const { country } = storyState;
  const { url } = useRouteMatch();
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    if (type === COMPONENT_TYPES.INPUT) history.push(`${url}/nation`);
  }, [history, url]);

  return (
    <Wrapper onClick={onChangeHistory}>
      <CountryFlagImageWrapper>
        {country.imgUrl && <img src={country.imgUrl} alt={country.name} />}
      </CountryFlagImageWrapper>
      <CountryText>{country.name || '여행한 나라'}</CountryText>
    </Wrapper>
  );
};

export default Country;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.darkbrown};
  }
`;

const CountryFlagImageWrapper = styled.div`
  width: 24px;
  height: 16px;
  background: ${({ theme }) => theme.colors.background};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CountryText = styled.span`
  margin-left: 8px;
  line-height: 28px;
`;
