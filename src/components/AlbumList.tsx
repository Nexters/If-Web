import React, { FC } from 'react';
import styled from 'styled-components';
import AlbumListItem from './AlbumListItem';

interface IAlbumContent {
  id: number;
  name: string;
  amount: number;
}

const albumList: IAlbumContent[] = [
  {
    id: 1,
    name: '대만',
    amount: 3,
  },
  {
    id: 2,
    name: '대한민국',
    amount: 15,
  },
  {
    id: 3,
    name: '러시아',
    amount: 198,
  },
  {
    id: 4,
    name: '남아프리카공화국',
    amount: 2093,
  },
  {
    id: 5,
    name: '마카오',
    amount: 20,
  },
  {
    id: 6,
    name: '일본',
    amount: 356,
  },
  {
    id: 7,
    name: '미국',
    amount: 3563,
  },
];

const AlbumListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  max-height: 400px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const AlbumInitialList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  min-width: 320px;
`;

const AlbumOverflowList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  min-height: 400px;
`;

const AlbumList: FC = () => {
  return (
    <AlbumListWrapper>
      <AlbumInitialList>
        {albumList.slice(0, 4).map(({ id, name, amount }) => (
          <AlbumListItem key={id} name={name} amount={amount} />
        ))}
      </AlbumInitialList>
      {albumList.length > 4 && (
        <AlbumOverflowList>
          {albumList.slice(4).map(({ id, name, amount }) => (
            <AlbumListItem key={id} name={name} amount={amount} />
          ))}
        </AlbumOverflowList>
      )}
    </AlbumListWrapper>
  );
};

export default AlbumList;
