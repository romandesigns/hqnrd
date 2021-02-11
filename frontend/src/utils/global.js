import { createGlobalStyle } from "styled-components";
import { media } from "./media-quries";

export const global = createGlobalStyle`
    
    html {
        box-sizing: border-box;
        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--light);
        color: var(--text-color);
        font: normal normal var(--font-size)/var(--line-height) var(--sans);
        height: inherit;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;

        
        align-self: center;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: minmax(auto, 80vw);
        justify-content: center;
        padding: var(--padding);
        ${media.desktop`grid-template-columns: minmax(auto, 75vw);`};
        ${media.laptop`grid-template-columns: minmax(auto, 88vw);`};
        ${media.mobile`grid-template-columns: minmax(auto, 95vw);`};
        ${media.tablet`grid-template-columns: minmax(auto, 92vw);`};
    }

    #root { height: inherit; }
    h1,h2,h3,h4,h5,h6,p { margin: 0; }

    a {
        color: var(--darker-primary);
        text-decoration: underline;
        &:hover {
            color: var(--success);
        }
    }

    figure {
        margin: 0;
        padding: 0;
        font-size:0;
        + div {
                margin-top: -2.5rem;
        }
    }
    ul { padding-left: 0; margin:0;}
    ul li { list-style-type: none }

    form {
        label {
            text-align: left;
            display: block;
            width: 100%;
            max-width:30rem;
        }
        
        input[type="text"],
        input[type="email"],
        select,
        input[type="password"] {
            border: none;
            outline: none;
            display: block;
            width: 100%;
            max-width:30rem;
            border:1px solid var(--border-color);
            padding: 1rem var(--padding) ;
            border-radius: var(--radius);
            margin-bottom: var(--margin);
            color: var(--text-color);
        }
        
        select {
            max-width:34rem;
        }
    }
`;
