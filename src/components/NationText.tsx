import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import NationIcon from '@/components/NationIcon';
import { NationIconType } from '@/components/NationIcon/NationIcon';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Icon from './FeatureIcon';

interface INationTextProps {
  type: 'INPUT' | 'PLAIN';
  nation: {
    id: number | null;
    name: NationIconType;
    title: string;
  };
}

const NationText: FC<INationTextProps> = ({ type, nation }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    if (type === 'INPUT') history.push(`${url}/nation`);
  }, [history, url]);

  return (
    <Wrapper onClick={onChangeHistory}>
      <NationIcon name={nation.name} />
      <LocationText>{nation.title || '여행한 나라'}</LocationText>
    </Wrapper>
  );
};

export default NationText;

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

const LocationText = styled.span`
  margin-left: 8px;
  line-height: 28px;
`;
