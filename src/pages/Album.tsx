import Layout from '@/components/common/Layout';
import NationList from '@/components/NationList';
import AlbumTitle from '@/components/AlbumTitle';
import React, { FC } from 'react';
import NationListTitle from '@/components/NationListTitle';

const nationList = [];

const Album: FC = () => {
  return (
    <Layout>
      {!!nationList.length && <AlbumTitle>기록한 나라</AlbumTitle>}
      {!nationList.length && (
        <AlbumTitle>
          오늘 식사시간에는
          <br />
          어떤 나라의 음식을 드셨나요?
        </AlbumTitle>
      )}
      {!!nationList.length && (
        <NationListTitle>새로운 나라도 기록해보세요!</NationListTitle>
      )}
      <NationList />
    </Layout>
  );
};

export default Album;
