import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';
import Story from '@/components/Story';
import AddButton from '@/components/AddButton';
import { useQuery } from 'react-query';
import {
  getCountryByType,
  ICountryByTypeForView,
} from '@/lib/api/getCountryByType';

interface IParamTypes {
  name: string;
}

const AlbumFeedList = () => {
  const history = useHistory();
  const { name } = useParams<IParamTypes>();
  const { data, error } = useQuery<ICountryByTypeForView[], Error>(
    'countryByType',
    getCountryByType(name)
  );

  const onChangeHistory = useCallback(() => {
    history.push('/album');
  }, []);

  if (!data) return null;
  if (error) return <div>Error...</div>;
  return (
    <Layout>
      <Header>
        <h2>{data[0].countryName || ''}</h2>
        <button onClick={onChangeHistory}>
          <FeatureIcon
            name={'arrow'}
            style={{ width: '24px', height: '24px' }}
          />
        </button>
        <span>{data.length || 0}</span>
      </Header>
      <div>
        {data.map(({ id, date, title, memo, picture_list }, idx) => {
          const pos = idx % 2 === 0 ? 'left' : 'right';
          return (
            <Story
              key={id}
              position={pos}
              id={id}
              date={date}
              memo={memo}
              picture_list={picture_list}
            />
          );
        })}
      </div>
      <AddButton nation={data[0].countryName || ''} />
    </Layout>
  );
};

export default AlbumFeedList;

const Header = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
    outline: none;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.headline};
  }
`;
