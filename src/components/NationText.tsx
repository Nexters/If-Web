import React, { FC } from 'react';
import styled from 'styled-components';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';
import NationIcon from '@/components/NationIcon';
import { NationIconType } from '@/components/NationIcon/NationIcon';

interface INationTextProps {
  nation: {
    id: number | null;
    name: NationIconType;
    title: string;
  };
}

const NationText: FC<INationTextProps> = ({ nation }) => {
  const onChangeMode = useChangeViewMode(AddContentViewMode.FIND_NATION);

  return (
    <Wrapper onClick={onChangeMode}>
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
