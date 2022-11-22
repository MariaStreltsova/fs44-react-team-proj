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

  ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

button, input{
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
