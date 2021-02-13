import React, { FC } from 'react';
import styled from 'styled-components';
import { INationList } from '@/lib/constants';
import FinderNationListItem from '@/components/NationFinder/FinderNationListItem';

interface IFinderNationListProps {
  nationList: INationList[];
}

const FinderNationList: FC<IFinderNationListProps> = ({ nationList }) => {
  return (
    <NationList>
      {nationList.map((nation) => (
        <FinderNationListItem nation={nation} key={nation.id} />
      ))}
    </NationList>
  );
};

export default FinderNationList;

const NationList = styled.ul`
  width: 100%;
`;
