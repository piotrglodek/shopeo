import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledHeading>Shopeo...</StyledHeading>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
`;

const StyledWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: ${({ theme: { color } }) => color.black};
  font-size: 3.4rem;
  font-weight: bold;
`;

export default Spinner;
