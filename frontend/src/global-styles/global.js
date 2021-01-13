import { createGlobalStyle } from "styled-components";
import { media } from "./media-quries";

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
        background-color: var(--bg-color);
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: grid;
        grid-template-columns: minmax(auto, 80vw);
        justify-content: center;
        align-self: center;
        box-sizing: border-box;
        padding: var(--padding);
        ${media.mobile`grid-template-columns: minmax(auto, 95vw);`};
        ${media.tablet`grid-template-columns: minmax(auto, 92vw);`};
        ${media.laptop`grid-template-columns: minmax(auto, 88vw);`};
        ${media.desktop`grid-template-columns: minmax(auto, 75vw);`};
    }

    #root {
       height: inherit;
    }

`;
