import React, { FC } from 'react';
import styled from 'styled-components';

interface ISearchEmptyFallback {
  keyword: string;
  selectCustomKeyword: () => void;
}

const SearchEmptyFallback: FC<ISearchEmptyFallback> = ({
  keyword,
  selectCustomKeyword,
}) => {
  return (
    <Wrapper>
      <div />
      <p>
        찾으시는 나라가 없습니다ㅠㅠ
        <br />
        검색하신 나라로 입력할까요?
      </p>
      <button
        onClick={selectCustomKeyword}
        tabIndex={0}
      >{`'${keyword}'(으)로 입력하기`}</button>
    </Wrapper>
  );
};

export default SearchEmptyFallback;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 125px;
    height: 125px;
    border: 1px dashed ${({ theme }) => theme.colors.lightgray};
    margin-bottom: 25px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.caption02};
    color: ${({ theme }) => theme.colors.darkgray};
    text-align: center;
    line-height: 24px;
    margin-bottom: 16px;
  }

  button {
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.darkbrown};
    font-size: ${({ theme }) => theme.fontSizes.caption01};
    letter-spacing: 0.1em;
    cursor: pointer;
  }
`;
