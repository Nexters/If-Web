import React, { FC, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import NationIcon from '@/components/NationIcon';
import { NationIconType } from '@/components/NationIcon/NationIcon';
import COMPONENT_TYPES from '@/types/ComponentTypes';

interface INationTextProps {
  type: COMPONENT_TYPES;
  nation: {
    id: number | null;
    name: NationIconType;
    title: string;
  };
}

const Nation: FC<INationTextProps> = ({ type, nation }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    if (type === COMPONENT_TYPES.INPUT) history.push(`${url}/nation`);
  }, [history, url]);

  return (
    <Wrapper onClick={onChangeHistory}>
      <NationIcon name={nation.name} />
      <NationText>{nation.title || '여행한 나라'}</NationText>
    </Wrapper>
  );
};

export default Nation;

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

const NationText = styled.span`
  margin-left: 8px;
  line-height: 28px;
`;
