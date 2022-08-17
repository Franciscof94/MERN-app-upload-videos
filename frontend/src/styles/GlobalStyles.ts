import { createGlobalStyle } from 'styled-components';
import Screen from './Screen';

export const GlobalStyles = createGlobalStyle`
    :root {
        --black-color: #0009;
        --border-radius: 5px;
        --blue-color: #4A90E0;
        --pink-color: #B47ABF
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #3494E6;  
        background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6); 
        background: linear-gradient(to right, #EC6EAD, #3494E6); 
        font-family: 'Poppins', sans-serif;
        font-size: 0.562rem;   
     
        ${Screen.sm`
            font-size: 0.562rem;  
        `}
 
        ${Screen.md`
            font-size: 0.625rem; 
        `}
 
        ${Screen.lg`
            font-size: 1rem; 
        `}
    }

   
`