import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import useAddContent from '@/hooks/useAddContent';
import { useHistory } from 'react-router-dom';
import { ISearchNationResult } from '@/types/Nation';

interface IFinderNationListItemProps {
  nation: ISearchNationResult;
}

const NationSearchListItem: FC<IFinderNationListItemProps> = ({ nation }) => {
  const { changeCountry } = useAddContent();
  const history = useHistory();

  const onChangeCountry = useCallback(() => {
    const nationInfo = {
      id: nation.id,
      name: nation.name,
      type: nation.type,
      imgUrl: nation.flag_image_url,
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
      <NationIconWrapper>
        {nation.flag_image_url ? (
          <img src={nation.flag_image_url} alt={nation.name} />
        ) : null}
      </NationIconWrapper>
      <span>{nation.name}</span>
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

const NationIconWrapper = styled.div`
  width: 36px;
  height: 24px;
  background: ${({ theme }) => theme.colors.background};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
