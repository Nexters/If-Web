import React, { FC } from 'react';
import styled from 'styled-components';
import { getFormattedDate } from '@/utils/formatter';
import Icon from './FeatureIcon';

interface IDateProps {
  date: string;
  bigger?: boolean;
}

const Date: FC<IDateProps> = (props) => {
  const { date, bigger } = props;
  return (
    <DateWrapper>
      <DateText bigger={bigger}>{getFormattedDate(date)}</DateText>
      <Divider bigger={bigger}>
        <Icon className="icon" name="divider" />
      </Divider>
    </DateWrapper>
  );
};

export default Date;

interface IDateTextProps {
  bigger?: boolean;
}

const DateWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const DateText = styled.div<IDateTextProps>`
  font-size: ${({ bigger }) => (bigger ? '16px' : '12px')};
  letter-spacing: 0.1em;
`;

const Divider = styled.div<IDateTextProps>`
  .icon {
    position: absolute;
    top: ${({ bigger }) => (bigger ? '15px' : '13px')};
  }
`;
