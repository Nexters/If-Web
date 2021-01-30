import React, { FC } from 'react';
import HeaderTypes from '@/types/HeaderTypes';
import { Link } from 'react-router-dom';
import AlbumIcon from '@/assets/album.svg';
import SaveIcon from '@/assets/save.svg';
import MyPageIcon from '@/assets/mypage.svg';
import ArrowIcon from '@/assets/arrow.svg';
import FeedIcon from '@/assets/feed.svg';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 44px 24px 34px 24px;
`;

const Icon = styled.div`
  cursor: pointer;
  display: inline-block;
  outline: none;
  & + & {
    margin-left: 24px;
  }
  div,
  img {
    outline: none;
  }
`;

const Text = styled.p<{ completed?: boolean }>`
  cursor: ${({ completed = true }) => (completed ? 'pointer' : 'default')};
  display: inline-block;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  color: ${({ completed = true, theme }) =>
    completed ? theme.colors.darkbrown : theme.colors.darkgray};
  & + & {
    margin-left: 24px;
  }
`;

const Arrow = () => {
  return (
    <Icon>
      <Link to="/">
        <img src={ArrowIcon} alt="Arrow" />
      </Link>
    </Icon>
  );
};

const MyPage = () => {
  return (
    <Icon>
      <Link to="/myPage">
        <img src={MyPageIcon} alt="My Page" />
      </Link>
    </Icon>
  );
};

interface Props {
  type: HeaderTypes;
  completed?: boolean;
  function1?: () => void;
  function2?: () => void;
}

const Header: FC<Props> = ({
  type,
  completed = true,
  function1 = () => {},
  function2 = () => {},
}) => {
  let content = <></>;

  if (type === HeaderTypes.feed) {
    content = (
      <>
        <Icon>
          <Link to="/album">
            <img src={AlbumIcon} alt="Album" />
          </Link>
        </Icon>
        <div>
          <Icon>
            <div
              onClick={function1}
              onKeyPress={function1}
              role="button"
              tabIndex={0}
            >
              <img src={SaveIcon} alt="Save" />
            </div>
          </Icon>
          <MyPage />
        </div>
      </>
    );
  } else if (type === HeaderTypes.addEdit) {
    let text = <></>;
    if (completed) {
      text = (
        <Text
          completed={completed}
          onClick={function1}
          onKeyPress={function1}
          role="button"
          tabIndex={0}
        >
          완료
        </Text>
      );
    } else {
      text = <Text completed={completed}>완료</Text>;
    }
    content = (
      <>
        <Arrow />
        {text}
      </>
    );
  } else if (type === HeaderTypes.detail) {
    content = (
      <>
        <Arrow />
        <div>
          <Text
            onClick={function1}
            onKeyPress={function1}
            role="button"
            tabIndex={0}
          >
            수정
          </Text>
          <Text
            onClick={function2}
            onKeyPress={function2}
            role="button"
            tabIndex={0}
          >
            삭제
          </Text>
        </div>
      </>
    );
  } else if (type === HeaderTypes.album) {
    content = (
      <>
        <Icon>
          <Link to="/feed">
            <img src={FeedIcon} alt="Feed" />
          </Link>
        </Icon>
        <MyPage />
      </>
    );
  } else if (type === HeaderTypes.myPage) {
    content = <Arrow />;
  }

  return <StyledHeader>{content}</StyledHeader>;
};

export default Header;
