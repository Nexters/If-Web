import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import Header from '@/pages/Header';
import HEADER_TYPES from '@/types/HeaderTypes';
import NationList from '@/components/NationList/NationList';
import Layout from '@/components/Layout';
import { useQuery } from 'react-query';
import { getCountries, ICountriesDataForView } from '@/lib/api/album';
import AlbumListItem from './AlbumListItem';

const AlbumList: FC = () => {
  const { data, error } = useQuery<ICountriesDataForView[], Error>(
    'countries',
    getCountries
  );

  const albumList = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((data) => data.numberOfStories > 0);
    }
  }, [data]);
  const isEmptyAlbum = useMemo(() => {
    if (albumList) {
      return albumList.length === 0;
    }
  }, [albumList]);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>에러 발생...</div>;
  return (
    <Layout>
      <Header type={HEADER_TYPES.ALBUM} />
      {isEmptyAlbum && (
        <>
          <PageTitleWrapper>
            <h3>
              오늘 식사시간에는
              <br />
              어떤 나라의 음식을 드셨나요?
            </h3>
          </PageTitleWrapper>
          <NationList data={data} />
        </>
      )}
      {!isEmptyAlbum && (
        <>
          <PageTitleWrapper>
            <h3>기록한 나라</h3>
            <span>{albumList ? albumList.length : ''}</span>
          </PageTitleWrapper>
          <AlbumListWrapper>
            <AlbumInitialList>
              {albumList &&
                albumList
                  .slice(0, 4)
                  .map(
                    ({ id, type, name, numberOfStories, letterImageUrl }) => (
                      <AlbumListItem
                        key={id}
                        name={name}
                        type={type}
                        amount={numberOfStories}
                        imgUrl={letterImageUrl}
                      />
                    )
                  )}
            </AlbumInitialList>
            {albumList && albumList.length > 4 && (
              <AlbumOverflowList>
                {albumList
                  .slice(4)
                  .map(
                    ({ id, type, name, numberOfStories, letterImageUrl }) => (
                      <AlbumListItem
                        key={id}
                        name={name}
                        type={type}
                        amount={numberOfStories}
                        imgUrl={letterImageUrl}
                      />
                    )
                  )}
              </AlbumOverflowList>
            )}
          </AlbumListWrapper>
          <NationList useTitle={true} data={data} />
        </>
      )}
    </Layout>
  );
};

export default AlbumList;

const PageTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 37px;
  line-height: 30px;
  font-size: ${({ theme }) => theme.fontSizes.title03};
  font-weight: normal;
  letter-spacing: 0.1em;

  span {
    padding-left: 12px;
  }
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
