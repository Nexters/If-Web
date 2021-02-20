import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Date from './Date';
import Icon from './FeatureIcon';

interface IPicture {
  id?: number;
  fileName?: string;
  order?: number;
  storyId?: number;
  url: string;
}

interface IStoryProps {
  id: string | null;
  position: string;
  title?: string;
  date: string;
  memo: string;
  picture_list: Array<IPicture>;
  isEmpty?: boolean;
}

const Story: FC<IStoryProps> = (props) => {
  const { id, date, title, position, picture_list, isEmpty } = props;
  const history = useHistory();

  const onClickPicture = () => {
    if (isEmpty) history.push('/add');
    else history.push(`/story/${id}`);
  };

  return (
    <StoryWrapper position={position}>
      {!isEmpty && <MaskingTape />}
      <PictureWrapper onClick={onClickPicture}>
        {picture_list.length > 0 && <img src={picture_list[0].url} />}
        {isEmpty && <Icon name="plus" />}
      </PictureWrapper>
      <Date date={date} />
      <Title isEmpty={isEmpty}>{title}</Title>
    </StoryWrapper>
  );
};

const MaskingTape: FC = () => {
  return (
    <MaskingTapeWrapper>
      <Icon name="masking" />
    </MaskingTapeWrapper>
  );
};

export default Story;

const StoryWrapper = styled.div<{ position: string }>`
  position: relative;
  width: 220px;
  height: 282px;
  margin: ${(props) =>
    props.position === 'left' ? '0 auto 60px 0' : '0 0 60px auto'};
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
  background-color: ${(props) => props.theme.colors.white};
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 196px;
  margin-bottom: 12px;
  border: 1px solid ${(props) => props.theme.colors.darkbrown};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div<{ isEmpty?: boolean }>`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${({ isEmpty, theme }) =>
    isEmpty ? theme.colors.darkgray : theme.colors.darkbrown};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const MaskingTapeWrapper = styled.span`
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
`;
