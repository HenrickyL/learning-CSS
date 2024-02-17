import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
    -webkit-user-drag: none; /* Dragable */
  }

  body {
    background-color: #222;
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  @property  --angle{
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }


`;

export default GlobalStyle;