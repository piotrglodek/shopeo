import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const sharedStyles = css`
  margin: 0;
  color: ${({ theme: { color } }) => color.black};
`;

const sharedHeadingStyles = css`
  padding: 2rem 0;
`;

export const Heading1 = styled.h1`
  ${sharedStyles}
  ${sharedHeadingStyles}
  font-size: 3.6rem;
`;

export const Heading2 = styled.h2`
  ${sharedStyles}
  ${sharedHeadingStyles}
  font-size: 3.2rem;
`;

export const Paragraph = styled.p`
  ${sharedStyles}
  padding: 1.6rem 0;
  font-size: 1.6rem;
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
`;

Paragraph.propTypes = {
  isBold: PropTypes.bool,
};

Paragraph.defaultProps = {
  isBold: false,
};
