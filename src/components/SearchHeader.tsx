import React, { FC, useCallback } from 'react';
import FeatureIcon from '@/components/FeatureIcon';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface ISearchHeaderProps {
  title: string;
}

const SearchHeader: FC<ISearchHeaderProps> = ({ title }) => {
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    history.push('/add');
  }, [history]);

  return (
    <Header>
      <h2>{title}</h2>
      <button onClick={onChangeHistory}>
        <FeatureIcon
          name={'cancel'}
          style={{ width: '24px', height: '24px' }}
        />
      </button>
    </Header>
  );
};

export default React.memo(SearchHeader);

const Header = styled.div`
  width: 100%;
  height: 44px;
  margin: 20px 0 30px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
`;
