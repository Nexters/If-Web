import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';
import Story from '@/components/Story';
import request from '@/utils/request';
import AddButton from '@/components/AddButton';

interface IParamTypes {
  name: string;
}

const AlbumFeedList = () => {
  const history = useHistory();
  const { name } = useParams<IParamTypes>();
  const [albumFeedList, setAlbumFeedList] = useState([]);

  useEffect(() => {
    getAlbumFeedList();
  }, []);

  const getAlbumFeedList = async () => {
    const data = await request({
      url: '/stories',
      method: 'GET',
    });
    setAlbumFeedList(data);
  };

  const onChangeHistory = useCallback(() => {
    history.push('/album');
  }, []);

  return (
    <Layout>
      <Header>
        <h2>{name}</h2>
        <button onClick={onChangeHistory}>
          <FeatureIcon
            name={'arrow'}
            style={{ width: '24px', height: '24px' }}
          />
        </button>
        <span>{'12'}</span>
      </Header>
      <div>
        {albumFeedList.map((feed, idx) => {
          const { id } = feed;
          const pos = idx % 2 === 0 ? 'left' : 'right';
          return <Story key={id} position={pos} {...feed} />;
        })}
      </div>
      <AddButton nation={name} />
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
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.headline};
  }
`;
