import React, { FC } from 'react';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';

interface AccountRowProps {
  handleCancelClick: () => void;
}

const CancelIcon: FC<AccountRowProps> = ({ handleCancelClick }) => {
  return (
    <Wrapper
      onClick={handleCancelClick}
      onKeyPress={handleCancelClick}
      role="button"
      tabIndex={0}
    >
      <FeatureIcon name={'cancel'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline;
  position: absolute;
  margin-top: 32px;
  margin-left: -24px;
  outline: none;
  cursor: pointer;
`;

export default CancelIcon;
