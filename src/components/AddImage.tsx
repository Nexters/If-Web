import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import Icon from './FeatureIcon';

interface IPlusIconProps {
  setImageState: (image: any) => void;
}

const AddImage: FC<IPlusIconProps> = ({ setImageState }) => {
  const inputFile = useRef<HTMLInputElement>(null);
  const onClickPlusIcon = () => inputFile.current?.click();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          setImageState({ file, imgUrl: e.target.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <IconWrapper onClick={onClickPlusIcon}>
      <input
        type="file"
        id="file"
        accept="image/*"
        ref={inputFile}
        style={{ display: 'none' }}
        multiple={false}
        onChange={handleImageUpload}
      />
      <Icon name="plus" />
    </IconWrapper>
  );
};

export default AddImage;

const IconWrapper = styled.div`
  width: 116px;
  height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
