import { createGlobalStyle } from 'styled-components';
import { darkPrimary, lightPrimary } from './Colors';

export const GlobalStyled = createGlobalStyle`
    
    html{
        box-sizing: border-box;        
        width: 100%;
        height: 100%;
        color: ${darkPrimary};
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    *, *:before, *:after {    
        box-sizing:inherit ;
        margin: 0;
        padding: 0;
    }    
`;
