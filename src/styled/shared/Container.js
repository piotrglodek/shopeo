import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.mobile};

  @media screen and (min-width: ${({ theme: { bp } }) => bp.tablet}) {
    padding: 0 ${({ theme: { spacing } }) => spacing.desktop};
  }
`;
