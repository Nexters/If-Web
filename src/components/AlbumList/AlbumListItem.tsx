import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface IAlbumListItemProps {
  name: string;
  type: string;
  amount: number;
  imgUrl: string;
}

const AlbumListItem: FC<IAlbumListItemProps> = ({
  name,
  type,
  amount,
  imgUrl,
}) => {
  const history = useHistory();

  const onChangeHistory = useCallback(() => {
    history.push(`/album/${type}`);
  }, [history, type]);

  return (
    <ListItem onClick={onChangeHistory}>
      <figure>
        <AlbumImageWrapper>
          <img src={imgUrl} alt={name} />
        </AlbumImageWrapper>
      </figure>
      <AlbumFigCaption>
        <span className="name">{name}</span>
        <span className="amount">{amount}</span>
      </AlbumFigCaption>
    </ListItem>
  );
};

export default AlbumListItem;

const ListItem = styled.li`
  padding: 0 20px 24px 0;
  height: 200px;
`;

const AlbumImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  margin-bottom: 16px;
`;

const AlbumFigCaption = styled.figcaption`
  display: flex;
  align-items: center;

  & .name {
    font-size: 18px;
    line-height: 20px;
    display: inline-block;
    max-width: 97px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .amount {
    font-size: ${({ theme }) => theme.fontSizes.caption02};
    line-height: 20px;
    display: inline-block;
    max-width: 35px;
    margin-left: 8px;
  }
`;
