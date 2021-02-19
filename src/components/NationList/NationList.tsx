import React, { FC } from 'react';
import styled from 'styled-components';
import { ICountriesDataForView } from '@/lib/api/getCountries';
import { useQueryClient } from 'react-query';
import NationListItem from './NationListItem';

interface INationListProps {
  useTitle?: boolean;
}

const NationList: FC<INationListProps> = ({ useTitle = false }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICountriesDataForView[]>('countries');

  if (!data) return null;
  return (
    <>
      {useTitle && (
        <NationListTitle>새로운 나라도 기록해보세요!</NationListTitle>
      )}
      <ul>
        {data.map(({ id, name, type, mainFood, albumStickerImageUrl }) => (
          <NationListItem
            key={id}
            name={name}
            type={type}
            foods={mainFood}
            imgUrl={albumStickerImageUrl}
          />
        ))}
      </ul>
    </>
  );
};

export default NationList;

const NationListTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.title04};
  line-height: 20px;
  padding: 24px 0 32px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
`;
