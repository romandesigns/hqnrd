import { createGlobalStyle } from "styled-components";

export const global = createGlobalStyle`
    
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        box-sizing: border-box;
    }

    body {
        height: inherit;
        font: normal normal var(--font-size)/var(--line-height) var(--sans);
        color: var(--text-color);
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: grid;
        grid-template-columns: minmax(auto, 80vw);
        justify-content: center;
    }

    #root {
       height: inherit;
       padding: var(--padding);
       box-sizing: border-box;
    }

`;
