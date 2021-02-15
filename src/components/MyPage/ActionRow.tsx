import React, { FC } from 'react';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';

interface ActionRowProps {
  title: string;
  onClickFunction?: () => void;
}

const ActionRow: FC<ActionRowProps> = ({ title, onClickFunction }) => {
  return (
    <Wrapper onClick={onClickFunction}>
      <p>{title}</p>
      <FeatureIcon name={'arrow2'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  cursor: pointer;

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.caption01};
    line-height: 28px;
  }
  svg {
    margin-top: 3px;
  }
`;

export default ActionRow;
