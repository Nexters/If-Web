import React, { FC } from 'react';
import FeatureIcon from '@/components/FeatureIcon';
import styled from 'styled-components';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';

interface ISearchHeaderProps {
  title: string;
}

const SearchHeader: FC<ISearchHeaderProps> = ({ title }) => {
  const changeToDefaultMode = useChangeViewMode(AddContentViewMode.DEFAULT);

  return (
    <Header>
      <button onClick={changeToDefaultMode}>
        <FeatureIcon
          name={'cancel'}
          style={{ width: '24px', height: '24px' }}
        />
      </button>
      <h2>{title}</h2>
    </Header>
  );
};

export default React.memo(SearchHeader);

const Header = styled.div`
  width: 100%;
  height: 44px;
  margin: 0 0 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background: none;
    padding: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
