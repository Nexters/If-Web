import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const AddButton: FC = () => {
  return (
    <>
      <ButtonWrapper>
        <Link to="/add">
          {/* button img */}
          dd
        </Link>
      </ButtonWrapper>
    </>
  );
};

export default AddButton;
