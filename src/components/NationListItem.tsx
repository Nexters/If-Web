import React, { FC } from 'react';
import styled from 'styled-components';

interface INationListItemProps {
  name: string;
  foods?: string;
}

const ListItem = styled.li`
  display: flex;

  & + & {
    margin-top: 24px;
  }
`;

const NationImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  margin-right: 12px;
`;

const NationDefinitionList = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;

  dt {
    line-height: 20px;
    font-size: ${({ theme }) => theme.fontSizes.title04};
    letter-spacing: 0.05em;
  }

  dd {
    line-height: 20px;
    font-size: ${({ theme }) => theme.fontSizes.caption03};
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.darkgray};
    margin-top: 4px;
    width: calc(100vw - 108px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const NationListItem: FC<INationListItemProps> = ({ name, foods }) => {
  return (
    <ListItem>
      <figure>
        <NationImageWrapper>
          {/* <img src="/#" alt="나라 기본이미지" />   */}
        </NationImageWrapper>
      </figure>
      <NationDefinitionList>
        <dt>{name}</dt>
        <dd>{foods}</dd>
      </NationDefinitionList>
    </ListItem>
  );
};

export default NationListItem;
