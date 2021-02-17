import React, { FC } from 'react';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';
import { useHistory } from 'react-router-dom';

interface UsernameRowProps {
  username: string;
}

const UsernameRow: FC<UsernameRowProps> = ({ username }) => {
  const history = useHistory();

  const handleEditClick = () => {
    history.push('/myPage/edit');
  };

  return (
    <Wrapper>
      <Username>{username}</Username>
      <EditIcon
        onClick={handleEditClick}
        onKeyPress={handleEditClick}
        role="button"
        tabIndex={0}
      >
        <FeatureIcon name={'edit'} />
      </EditIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Username = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.title01};
  line-height: 30px;
`;

const EditIcon = styled.div`
  margin-left: 8px;
  line-height: 30px;
  cursor: pointer;
  outline: none;
`;

export default UsernameRow;
