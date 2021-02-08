import React, { FC, useState } from 'react';
import { atom, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import TitleInput from '@/components/TitleInput';
import LocationText from '@/components/LocationText';
import NationText from '@/components/NationText';
import ContentInput from '@/components/ContentInput';
import ImageList from '@/components/ImageList';

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
      <TitleInput />
      <LocationText location={location} />
      <NationText nation={nation} />
      <ImageList imageList={imageListData} />
      <ContentInput />
    </AddContentWrapper>
  );
};

export default AddContent;
