import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark-blue: #0B132B;
        --dark-blue-light: #1C2541;
        --dark-blue-lighter: #2B3B56;
        --light-cyan: #6FFFE9;
        --form-cyan: #4B8895;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #fff;
    }

    html {
        min-width: 100%;
        min-height: 100%;
        font-family: 'Raleway', sans-serif;
    }

    body {
        min-width: 100vw;
        min-height: 100vh;
        background-color: var(--dark-blue);
    }
`