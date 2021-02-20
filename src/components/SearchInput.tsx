import React, { FC } from 'react';
import FeatureIcon from '@/components/FeatureIcon';
import styled from 'styled-components';

interface ISearchInputProps {
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput: FC<ISearchInputProps> = ({
  value,
  onChangeValue,
  placeholder,
}) => {
  return (
    <InputBase>
      <FeatureIcon name={'search'} className={'searchIcon'} />
      <Input
        type={'text'}
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
      />
    </InputBase>
  );
};

export default SearchInput;

const InputBase = styled.div`
  position: relative;
  margin-bottom: 44px;

  .searchIcon {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  padding-left: 32px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkbrown};
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.title04};
  letter-spacing: 0.05em;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.darkgray};
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.title04};
  }
`;
