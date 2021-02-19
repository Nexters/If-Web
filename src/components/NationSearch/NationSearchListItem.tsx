import NationIcon from '@/components/NationIcon/NationIcon';
import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { INationList } from '@/lib/constants';
import useAddContent from '@/hooks/useAddContent';
import { useHistory } from 'react-router-dom';

interface IFinderNationListItemProps {
  nation: INationList;
}

const NationSearchListItem: FC<IFinderNationListItemProps> = ({ nation }) => {
  const { changeCountry } = useAddContent();
  const history = useHistory();

  const onChangeCountry = useCallback(() => {
    const nationInfo = {
      id: nation.id,
      name: nation.name,
      title: nation.title,
    };
    changeCountry(nationInfo);
    history.push('/add');
  }, [nation, changeCountry, history]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      onChangeCountry();
    }
  };

  return (
    <NationListItem
      onClick={onChangeCountry}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <NationIcon name={nation.name} />
      <span>{nation.title}</span>
    </NationListItem>
  );
};

export default NationSearchListItem;

const NationListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 32px;
  }

  svg {
    width: 36px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.darkbrown};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.caption01};
    margin-left: 12px;
  }
`;
