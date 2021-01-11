import { createGlobalStyle } from "styled-components";

export const global = createGlobalStyle`
    
    html,body {
         height: 100%;
         margin: 0;
    }

    #root {
        height: inherit;
        background-color:  ${({ theme }) => theme.palette.gray6};
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

    a {
        text-decoration: none;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
        margin: auto;
    }

    button {
        width: 100%;
        max-width: 19rem;
        margin:.5rem;
        display: inline-block;
        border: none;
        border-radius: ${({ theme }) => theme.layout.radius};;
        padding: 0;
        background: transparent;
        box-shadow: ${({ theme }) => theme.layout.boxShadow};

        a {
            text-decoration:none;
            width: inherit;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: ${({ theme }) => theme.layout.radius};
            text-align: center;
            font-weight: 700;
            line-height: 4rem;
            color: ${({ theme }) => theme.palette.white};
            &:hover {
                color: ${({ theme }) => theme.palette.white} !important;
            background-color: rgb(0 0 0 / 12%);

            }
            svg {
                transform: translateY(-1PX) translateX(-5px);
            }
        }
    }

    a {
       text-decoration:underline;
       &:hover {
           color: ${({ theme }) => theme.palette.alt_color_c} !important;
       }
    }

    h1, p {
        margin:0;
    }



    form {
        width: 100%;
        background-color: ${({ theme }) => theme.palette.white};
        padding: ${({ theme }) => theme.layout.innerPadding};
        border-radius: ${({ theme }) => theme.layout.radius};
        box-shadow: ${({ theme }) => theme.layout.boxShadow};

        label {
            display: block;
            width: 100%;
            text-align: left;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        input[type="password"] {
        border: 0;
        outline: none;
        width: 100%;
        color: ${({ theme }) => theme.palette.primary};
        border: 1px solid ${({ theme }) => theme.palette.border};
        border-radius: ${({ theme }) => theme.layout.radius};
        padding: calc(${({ theme }) => theme.layout.innerPadding} - 1rem);
        box-sizing: border-box;
        margin-bottom: 1rem;
        }

        input[type="radius"],
        input[type="checkbox"]{
            border-color: ${({ theme }) => theme.palette.border}
        }

        input[type="submit"] {
            border:none;
        } 

        button[type="submit"]{
            text-align: center;
            font-weight: 700;
            line-height: 4rem;
            cursor: pointer;
        }
    }


`;
