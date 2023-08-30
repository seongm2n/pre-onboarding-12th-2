import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body{
    padding: 0;
    margin: 0;
  }

  ul, li {
    list-style: none;
  }

  span{
    font-size: 14px;
  }

  a{
    cursor: pointer;
    color:black;
    text-decoration:none;
  }

  a:hover,
  a:link,
  a:visited,
  a:hover {
    text-decoration:none;
  }
`;
export default GlobalStyle;
