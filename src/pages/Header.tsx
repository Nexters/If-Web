import React, { FC, useCallback } from 'react';
import HEADER_TYPES from '@/types/HeaderTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';
import { MyPageStateAtom, MyPageStateField } from '@/atoms/myPageState';
import { useSetRecoilState } from 'recoil';

interface ArrowProps {
  route: string;
}

const Arrow: FC<ArrowProps> = ({ route }) => {
  return (
    <Icon>
      <Link to={route}>
        <FeatureIcon name={'arrow'} />
      </Link>
    </Icon>
  );
};

interface MyPageProps {
  updateParent: (parent: MyPageStateField) => void;
  parent: MyPageStateField;
}

const MyPage: FC<MyPageProps> = ({ updateParent, parent }) => {
  const handleClick = () => {
    updateParent(parent);
  };

  return (
    <Icon
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      <Link to={'/myPage'}>
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
  parentRoute?: MyPageStateField;
}

const Header: FC<Props> = ({
  type,
  completed = true,
  primaryFunction = () => {},
  deleteFunction = () => {},
  parentRoute = MyPageStateField.FEED,
}) => {
  const setMyPageState = useSetRecoilState(MyPageStateAtom);

  const updateMyPageParent = useCallback(
    (parent: MyPageStateField) => {
      setMyPageState((prevState) => ({
        ...prevState,
        parent,
      }));
    },
    [setMyPageState]
  );

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
            <MyPage
              updateParent={updateMyPageParent}
              parent={MyPageStateField.FEED}
            />
          </div>
        </>
      )}

      {type === HEADER_TYPES.ADD_EDIT && (
        <>
          <Arrow route={'/'} />
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
          <Arrow route={'/'} />
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
          <MyPage
            updateParent={updateMyPageParent}
            parent={MyPageStateField.ALBUM}
          />
        </>
      )}

      {type === HEADER_TYPES.MY_PAGE && (
        <Icon>
          <Link to={parentRoute === MyPageStateField.ALBUM ? '/album' : '/'}>
            <FeatureIcon name={'arrow'} />
          </Link>
        </Icon>
      )}

      {type === HEADER_TYPES.MY_PAGE_EDIT && (
        <>
          <Arrow route={'/myPage'} />
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

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 34px 0;
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

export default Header;
