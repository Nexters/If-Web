import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { atom, useRecoilValue } from 'recoil';
import Header from '@/pages/Header';
import HEADER_TYPES from '@/types/HeaderTypes';
import NationList from '@/components/NationList/NationList';
import Layout from '@/components/Layout';
import AlbumListItem from './AlbumListItem';

interface IAlbumContent {
  id: number;
  name: string;
  code: string;
  amount: number;
}

const albumList: IAlbumContent[] = [
  {
    id: 1,
    name: '대만',
    code: 'taiwan',
    amount: 3,
  },
  {
    id: 2,
    name: '대한민국',
    code: 'korea',
    amount: 15,
  },
  {
    id: 3,
    name: '러시아',
    code: 'russia',
    amount: 198,
  },
  {
    id: 4,
    name: '남아프리카공화국',
    code: 'southafrica',
    amount: 2093,
  },
  {
    id: 5,
    name: '마카오',
    code: 'macau',
    amount: 20,
  },
  {
    id: 6,
    name: '일본',
    code: 'japan',
    amount: 356,
  },
  {
    id: 7,
    name: '미국',
    code: 'usa',
    amount: 3563,
  },
];

const album = atom({
  key: 'album',
  default: [111],
});

const AlbumList: FC = () => {
  const albumData = useRecoilValue(album);
  const isEmptyAlbum = useMemo(() => albumData.length === 0, [albumData]);
  return (
    <Layout padding={'0 24px'}>
      <Header type={HEADER_TYPES.ALBUM} />
      {isEmptyAlbum && (
        <>
          <PageTitle>
            오늘 식사시간에는
            <br />
            어떤 나라의 음식을 드셨나요?
          </PageTitle>
          <NationList />
        </>
      )}
      {!isEmptyAlbum && (
        <>
          <PageTitle>기록한 나라</PageTitle>
          <AlbumListWrapper>
            <AlbumInitialList>
              {albumList.slice(0, 4).map(({ id, name, code, amount }) => (
                <AlbumListItem
                  key={id}
                  name={name}
                  amount={amount}
                  code={code}
                />
              ))}
            </AlbumInitialList>
            {albumList.length > 4 && (
              <AlbumOverflowList>
                {albumList.slice(4).map(({ id, name, code, amount }) => (
                  <AlbumListItem
                    key={id}
                    name={name}
                    amount={amount}
                    code={code}
                  />
                ))}
              </AlbumOverflowList>
            )}
          </AlbumListWrapper>
          <NationList useTitle={true} />
        </>
      )}
    </Layout>
  );
};

export default AlbumList;

const PageTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.title03};
  font-weight: normal;
  letter-spacing: 0.1em;
  line-height: 30px;
  padding: 0 0 32px 0;
`;

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
