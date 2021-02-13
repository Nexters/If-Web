import React, { FC, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';
import HEADER_TYPES from '@/types/HeaderTypes';
import TitleInput from '@/components/TitleInput';
import LocationText from '@/components/LocationText';
import NationText from '@/components/NationText';
import ContentInput from '@/components/ContentInput';
import { AddContentViewMode, useViewMode } from '@/atoms/addContentViewState';
import NationFinder from '@/components/NationFinder';
import Header from './Header';

const AddContent: FC = () => {
  const mode = useViewMode();

  return (
    <>
      {mode === AddContentViewMode.DEFAULT && (
        <AddContentWrapper>
          <Header type={HEADER_TYPES.ADD_EDIT} />
          <TitleInput />
          <LocationText />
          {/* <NationText /> */}
          {/* <ImageList imageList={imageListData} /> */}
          <ContentInput />
        </AddContentWrapper>
      )}
      {mode === AddContentViewMode.FIND_NATION && <NationFinder />}
    </>
  );
};

const AddContentWrapper = styled.div`
  padding: 0 24px;
`;

export default AddContent;
