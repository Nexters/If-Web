import React, { FC } from 'react';
import styled from 'styled-components';
import { ICountriesDataForView } from '@/lib/api/album';
import NationListItem from './NationListItem';

interface INationListProps {
  useTitle?: boolean;
  data: ICountriesDataForView[] | undefined;
}

const NationList: FC<INationListProps> = ({ useTitle = false, data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <>
      {useTitle && (
        <NationListTitle>새로운 나라도 기록해보세요!</NationListTitle>
      )}
      <ul>
        {data &&
          data.map(({ id, name, type, letterImageUrl }) => (
            <NationListItem
              key={id}
              name={name}
              type={type}
              foods={''}
              imgUrl={letterImageUrl}
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
