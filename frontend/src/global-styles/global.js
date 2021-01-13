import { createGlobalStyle } from "styled-components";

export const global = createGlobalStyle`
    
    html,body {
         height: 100vh;
         margin: 0;
    }

    #root {
        height: inherit;
        background-color:  ${({ theme }) => theme.palette.gray7};
    }

    html {
        margin: 0;
        padding: 0;
        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        color:   ${(props) => props.theme.palette.gray3};
        font-size: ${(props) => props.theme.typo.fontSize};
        line-height: ${(props) => props.theme.typo.lineHeight};
        font-family: ${(props) => props.theme.typo.sans};
        background: ${(props) => props.theme.palette.gray6};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;
