import React, { FC } from 'react';
import PlaceSearchListItem from '@/components/PlaceSearch/PlaceSearchListItem';
import styled from 'styled-components';
import { IPlace } from '@/types/Place';

interface IPlaceSearchListProps {
  places: IPlace[];
}

/* eslint-disable camelcase */
const PlaceSearchList: FC<IPlaceSearchListProps> = (props) => {
  const { places } = props;
  return (
    <List>
      {places.map(({ id, place_name }) => (
        <PlaceSearchListItem key={id} placeName={place_name} />
      ))}
    </List>
  );
};

export default PlaceSearchList;

const List = styled.ul`
  max-height: calc(100vh - 213px);
  overflow-y: auto;
`;
