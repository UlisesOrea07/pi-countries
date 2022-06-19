import { createGlobalStyle } from 'styled-components';
import { darkPrimary, lightPrimary } from './Colors';

export const GlobalStyled = createGlobalStyle`
html {
   height: 100%;
}
body {
     min-height: 100vh;
}
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    /* html{
        box-sizing: border-box;        
        width: 100%;
        height: 100%;
        color: ${darkPrimary};
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    } */
    /* *, *:before, *:after {    
        box-sizing:inherit ;
        margin: 0;
        padding: 0;
    }     */
`;
