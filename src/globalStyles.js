import { createGlobalStyle } from "styled-components";
const GlobalStyle= createGlobalStyle`
*{
    margin:0;
    padding:0; 
    bos-sizing:border-box;
    font-family: 'Josefin Sans', sans-serif;
    font-size:17px;
}
html, body {
    overflow-x: hidden;
};`

export default GlobalStyle