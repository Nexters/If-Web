import React, { FC } from 'react';
import PlaceSearchListItem from '@/components/PlaceSearch/PlaceSearchListItem';
import styled from 'styled-components';

interface IPlaceSearchListProps {}

const PlaceSearchList: FC<IPlaceSearchListProps> = () => {
  return (
    <List>
      <PlaceSearchListItem />
    </List>
  );
};

export default PlaceSearchList;

const List = styled.ul`
  max-height: calc(100vh - 213px);
  overflow-y: auto;
`;
