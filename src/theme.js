import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    primary: '#575fcf',
    darkPrimary: '#3c40c6',
    white: '#f5f5f5',
    gray: '#808e9b',
    black: '#1e272e',
    sucess: '#0be881',
    darkSucess: '#05c46b',
    danger: '#ff5e57',
    darkDanger: '#ff3f34',
  },
  spacing: {
    mobile: '1.6rem',
    desktop: '2.4rem',
  },
  bp: {
    tablet: '768px',
    laptop: '1024px',
    desktop: '1400px',
  },
};

export const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        box-sizing:border-box;
    }

    html{
      font-size: 62.5%; // 1rem = 10px
    }
    
    body{
        margin:0;
        font-family: 'Kumbh Sans', sans-serif;
    }
`;
