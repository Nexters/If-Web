import React, { FC } from 'react';
import styled from 'styled-components';

const FinderNationList: FC = ({ children }) => {
  return <NationList>{children}</NationList>;
};

export default FinderNationList;

const NationList = styled.ul`
  width: 100%;
`;
