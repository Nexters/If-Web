import React, { FC } from 'react';
import styled from 'styled-components';
import { getFormattedDate } from '@/utils/formatter';
import { useHistory } from 'react-router-dom';
import Icon from './FeatureIcon';

interface IPicture {
  id: number;
  fileName: string;
  order: number;
  storyId: number;
  url: string;
}

interface IStoryProps {
  id: string | null;
  position: string;
  date: string;
  memo: string;
  picture_list: Array<IPicture>;
  isEmpty?: boolean;
}

const Story: FC<IStoryProps> = (props) => {
  const { id, date, memo, position, picture_list, isEmpty } = props;
  const history = useHistory();
  const onClickPicture = () => {
    if (isEmpty) history.push('/add');
    else history.push(`/story/${id}`);
  };
  return (
    <StoryWrapper position={position}>
      <PictureWrapper onClick={onClickPicture}>
        {picture_list.length > 0 && <img src={picture_list[0].url} />}
        {isEmpty && <Icon name="plus" />}
      </PictureWrapper>
      <Date>
        <DateText>{getFormattedDate(date)}</DateText>
        <Divider>
          <Icon className="icon" name="divider" />
        </Divider>
      </Date>
      <Memo>{memo}</Memo>
    </StoryWrapper>
  );
};

export default Story;

const StoryWrapper = styled.div<{ position: string }>`
  width: 220px;
  height: 282px;
  margin: ${(props) =>
    props.position === 'left' ? '0 auto 60px 24px' : '0 24px 60px auto'};
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
`;

const Date = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const DateText = styled.div`
  font-size: 12px;
  letter-spacing: 0.1em;
`;

const Divider = styled.div`
  .icon {
    position: absolute;
    top: 13px;
  }
`;

const Memo = styled.div`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.darkgray};
`;
