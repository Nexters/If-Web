import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import FeatureIcon from '@/components/FeatureIcon';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';
import FinderNationList from '@/components/NationFinder/FinderNationList';
import FinderNationListItem from '@/components/NationFinder/FinderNationListItem';
import FinderEmptyFallback from '@/components/NationFinder/FinderEmptyFallback';
import { nationList } from '@/lib/constants';
import useInput from '@/hooks/useInput';

const NationFinder: FC = () => {
  const onChangeMode = useChangeViewMode(AddContentViewMode.DEFAULT);
  const { value, onChangeValue } = useInput();

  const filteredNationList = useMemo(() => {
    if (value === '') return nationList;
    return nationList.filter((nation) => nation.title === value);
  }, [value]);

  return (
    <Layout padding={'30px 24px'}>
      <Header>
        <button onClick={onChangeMode}>
          <FeatureIcon
            name={'cancel'}
            style={{ width: '24px', height: '24px' }}
          />
        </button>
        <h2>여행한 나라 찾기</h2>
      </Header>
      <InputBase>
        <FeatureIcon name={'search'} className={'searchIcon'} />
        <Input
          type={'text'}
          placeholder={'나라를 검색해보세요'}
          onChange={onChangeValue}
          value={value}
        />
      </InputBase>
      {filteredNationList.length > 0 && (
        <FinderNationList>
          {filteredNationList.map((nation) => (
            <FinderNationListItem nation={nation} key={nation.id} />
          ))}
        </FinderNationList>
      )}
      {filteredNationList.length === 0 && (
        <FinderEmptyFallback keyword={value} />
      )}
    </Layout>
  );
};

export default NationFinder;

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

const InputBase = styled.div`
  position: relative;
  margin-bottom: 44px;

  .searchIcon {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white2};
  padding-left: 32px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkbrown};
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.title04};
  letter-spacing: 0.05em;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.darkgray};
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.title04};
  }
`;
