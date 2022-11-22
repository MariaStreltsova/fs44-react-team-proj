import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    min-height: 100vh ;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;
