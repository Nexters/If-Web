import React, { FC, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import NationIcon from '@/components/NationIcon';
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
      {/* <NationIcon name={country.name} /> */}
      <CountryText>{country.title || '여행한 나라'}</CountryText>
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

const CountryText = styled.span`
  margin-left: 8px;
  line-height: 28px;
`;
