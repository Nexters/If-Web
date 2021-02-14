import NationIcon from '@/components/NationIcon/NationIcon';
import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { INationList } from '@/lib/constants';
import useAddContent from '@/hooks/useAddContent';
import {
  AddContentViewMode,
  useChangeViewMode,
} from '@/atoms/addContentViewState';

interface IFinderNationListItemProps {
  nation: INationList;
}

const NationSearchListItem: FC<IFinderNationListItemProps> = ({ nation }) => {
  const { changeNation } = useAddContent();
  const changeToDefaultMode = useChangeViewMode(AddContentViewMode.DEFAULT);

  const onChangeNation = useCallback(() => {
    const nationInfo = {
      id: nation.id,
      name: nation.name,
      title: nation.title,
    };
    changeNation(nationInfo);
    changeToDefaultMode();
  }, [nation, changeNation, changeToDefaultMode]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      onChangeNation();
    }
  };

  return (
    <NationListItem onClick={onChangeNation} onKeyDown={onKeyDown} tabIndex={0}>
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
