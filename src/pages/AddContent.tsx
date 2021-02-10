import React, { FC, useState } from 'react';
import { atom, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import HEADER_TYPES from '@/types/HeaderTypes';
import TitleInput from '@/components/TitleInput';
import LocationText from '@/components/LocationText';
import NationText from '@/components/NationText';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';
import Header from './Header';

const AddContentWrapper = styled.div`
  padding: 0 24px;
`;

const imageList = atom({
  key: 'imageList',
  default: [],
});

const AddContent: FC = () => {
  const [location, setLocation] = useState('음식을 먹은 장소');
  const [nation, setNation] = useState(null);
  const imageListData = useRecoilValue(imageList);
  return (
    <AddContentWrapper>
      <Header type={HEADER_TYPES.ADD_EDIT} />
      <TitleInput />
      <LocationText location={location} />
      <NationText nation={nation} />
      <ImageList imageList={imageListData} />
      <ContentInput />
    </AddContentWrapper>
  );
};

export default AddContent;
