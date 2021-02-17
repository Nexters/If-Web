import React, { FC, useMemo } from 'react';
import Layout from '@/components/Layout';
import NationList from '@/components/NationList';
import AlbumList from '@/components/AlbumList';
import HEADER_TYPES from '@/types/HeaderTypes';
import Header from '@/pages/Header';
import styled from 'styled-components';
import { atom, useRecoilValue } from 'recoil';

const album = atom({
  key: 'album',
  default: [111],
});

const Album: FC = () => {
  const albumData = useRecoilValue(album);
  const isEmptyAlbum = useMemo(() => albumData.length === 0, [albumData]);

  return (
    <Layout>
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
          <AlbumList />
          <NationList useTitle={true} />
        </>
      )}
    </Layout>
  );
};

export default Album;

const PageTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.title03};
  font-weight: normal;
  letter-spacing: 0.1em;
  line-height: 30px;
  padding: 0 0 32px 0;
`;
