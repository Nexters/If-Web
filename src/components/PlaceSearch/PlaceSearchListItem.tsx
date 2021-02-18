import React, { FC } from 'react';
import styled from 'styled-components';
import { useStoryState } from '@/atoms/storyState';
import { useHistory } from 'react-router-dom';
import { getFormattedDistance } from '@/utils/formatter';

interface IPlaceSearchListItem {
  placeName: string;
  distance: string;
  placeLatitude?: number;
  placeLongitude?: number;
}

const PlaceSearchListItem: FC<IPlaceSearchListItem> = (props) => {
  const { placeName, distance, placeLatitude, placeLongitude } = props;
  const { setStoryPlace } = useStoryState();
  const history = useHistory();

  const onClickPlaceItem = () => {
    setStoryPlace({ placeName, placeLatitude, placeLongitude });
    history.push('/add');
  };

  return (
    <ListItem onClick={onClickPlaceItem}>
      <strong>{placeName}</strong>
      <span>{getFormattedDistance(distance)}</span>
    </ListItem>
  );
};

export default PlaceSearchListItem;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 28px;

  & + & {
    margin-top: 32px;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes.headline};
    letter-spacing: 0.1em;
    max-width: calc(100% - 60px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.caption02};
    color: ${({ theme }) => theme.colors.darkgray};
    margin-left: 10px;
  }
`;
