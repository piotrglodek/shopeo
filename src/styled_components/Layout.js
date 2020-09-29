import PropTypes from 'prop-types';
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

export const Grid = styled.div`
  ${({ direction, justify, align, wrap }) =>
    `
        display:flex;
        flex-flow: ${direction} ${wrap};
        align-items:${align};
        justify-content:${justify};

  `}

  & > div {
    padding: ${({ spacing }) => spacing * 2}px;
  }

  ${({ xs }) =>
    xs &&
    `
    & > div{
        @media screen and (max-width:599px){
            max-width: ${xs}%;
            flex-basis:${xs}%;
        }
    }
  `}

  ${({ sm }) =>
    sm &&
    `
    & > div{
        @media screen and (min-width:600px){
            max-width: ${sm}%;
            flex-basis:${sm}%;
      }
    }
  `}

  ${({ md }) =>
    md &&
    `
    & > div{
        @media screen and (min-width:960px){
            max-width: ${md}%;
            flex-basis:${md}%;
        }
    }
    `}

  ${({ lg }) =>
    lg &&
    `
    & > div{
        @media screen and (min-width:1280px){
            max-width: ${lg}%;
            flex-basis:${lg}%;
        }
    }
  `}
`;

export const GridItem = styled.div`
  width: 100%;
  flex-basis: 100%;
`;

export const Divider = styled.section`
  margin: 8rem 0;
`;

Grid.propTypes = {
  spacing: PropTypes.number,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  wrap: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

Grid.defaultProps = {
  spacing: 0,
  direction: 'row',
  justify: 'start',
  align: 'start',
  wrap: 'wrap',
};
