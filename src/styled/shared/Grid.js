import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Grid = styled.div`
  ${({ direction, justifyContent, alignItems, wrap }) =>
    `
        display:flex;
        flex-flow: ${direction} ${wrap};
        align-items:${alignItems};
        justify-content:${justifyContent};

  `}

  & > div {
    padding: ${({ spacing }) => spacing * 2}px;
  }

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
  padding: 1rem;
`;

Grid.propTypes = {
  spacing: PropTypes.number,
  direction: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  wrap: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

Grid.defaultProps = {
  spacing: 0,
  direction: 'row',
  justifyContent: 'start',
  alignItems: 'start',
  wrap: 'nowrap',
};
