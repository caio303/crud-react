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
        max-width: 100vw;
    }

    html {
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Raleway', sans-serif;
         
        * {
            max-width: 100vw;
        }
    }

    body {
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        background-color: var(--dark-blue);
    }

    a {
        text-decoration: none;

        &:visited {
            color: inherit;
        }
    }
`