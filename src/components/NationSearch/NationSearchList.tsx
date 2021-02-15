import React, { FC } from 'react';
import styled from 'styled-components';
import { INationList } from '@/lib/constants';
import NationSearchListItem from '@/components/NationSearch/NationSearchListItem';

interface IFinderNationListProps {
  nationList: INationList[];
}

const NationSearchList: FC<IFinderNationListProps> = ({ nationList }) => {
  return (
    <List>
      {nationList.map((nation) => (
        <NationSearchListItem nation={nation} key={nation.id} />
      ))}
    </List>
  );
};

export default NationSearchList;

const List = styled.ul`
  max-height: calc(100vh - 213px);
  overflow-y: auto;
`;
