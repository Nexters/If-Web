import React, { FC } from 'react';
import HEADER_TYPES from '@/types/HeaderTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
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
  font-size: ${(props) => props.theme.fontSizes.headline};
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
        <FeatureIcon name={'arrow'} />
      </Link>
    </Icon>
  );
};

const MyPage = () => {
  return (
    <Icon>
      <Link to="/myPage">
        <FeatureIcon name={'mypage'} />
      </Link>
    </Icon>
  );
};

interface Props {
  type: HEADER_TYPES;
  completed?: boolean;
  primaryFunction?: () => void;
  deleteFunction?: () => void;
}

const Header: FC<Props> = ({
  type,
  completed = true,
  primaryFunction = () => {},
  deleteFunction = () => {},
}) => {
  return (
    <StyledHeader>
      {type === HEADER_TYPES.FEED && (
        <>
          <Icon>
            <Link to="/album">
              <FeatureIcon name={'album'} />
            </Link>
          </Icon>
          <div>
            <Icon>
              <div
                onClick={primaryFunction}
                onKeyPress={primaryFunction}
                role="button"
                tabIndex={0}
              >
                <FeatureIcon name={'save'} />
              </div>
            </Icon>
            <MyPage />
          </div>
        </>
      )}

      {type === HEADER_TYPES.ADD_EDIT && (
        <>
          <Arrow />
          {completed ? (
            <Text
              completed={completed}
              onClick={primaryFunction}
              onKeyPress={primaryFunction}
              role="button"
              tabIndex={0}
            >
              완료
            </Text>
          ) : (
            <Text completed={completed}>완료</Text>
          )}
        </>
      )}

      {type === HEADER_TYPES.DETAIL && (
        <>
          <Arrow />
          <div>
            <Text
              onClick={primaryFunction}
              onKeyPress={primaryFunction}
              role="button"
              tabIndex={0}
            >
              수정
            </Text>
            <Text
              onClick={deleteFunction}
              onKeyPress={deleteFunction}
              role="button"
              tabIndex={0}
            >
              삭제
            </Text>
          </div>
        </>
      )}

      {type === HEADER_TYPES.ALBUM && (
        <>
          <Icon>
            <Link to="/">
              <FeatureIcon name={'feed'} />
            </Link>
          </Icon>
          <MyPage />
        </>
      )}

      {type === HEADER_TYPES.MY_PAGE && <Arrow />}

      {type === HEADER_TYPES.MY_PAGE_EDIT && (
        <>
          <Icon>
            <Link to="/myPage">
              <FeatureIcon name={'arrow'} />
            </Link>
          </Icon>
          {completed ? (
            <Text
              completed={completed}
              onClick={primaryFunction}
              onKeyPress={primaryFunction}
              role="button"
              tabIndex={0}
            >
              완료
            </Text>
          ) : (
            <Text completed={completed}>완료</Text>
          )}
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
