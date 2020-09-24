import styled from 'styled-components';

export const Section = styled.section`
  margin: 8rem 0;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  padding-bottom: 0.4rem;
  font-size: 3rem;
  color: ${({ theme: { color } }) => color.black};
`;

export const SectionSubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme: { color } }) => color.gray};
  letter-spacing: 0.1rem;
`;
