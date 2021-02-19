import React, { FC } from 'react';
import styled from 'styled-components';
import NationSearchListItem from '@/components/NationSearch/NationSearchListItem';
import { ISearchNationResult } from '@/types/Nation';

interface IFinderNationListProps {
  nationList: ISearchNationResult[];
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
