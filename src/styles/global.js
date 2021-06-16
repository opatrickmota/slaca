import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        min-height: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
    body{
        background: #FFFFFF;
        -webkit-font-smoothing: antialiased !important;
    }
 
    body, input, button {
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    :root{
        --orange: #ED7839;
        --orange-light: #FDF1EB;
        --text: #5C5C5C;
        --text-dark: #4E4E4E;
        --gray: #F8F8F8;
        --gray-dark: #EAF1F2;
        --purple: #71478E;
        --white: #FFFFFF;
        --brown: #725C5C;
    }
`

export default GlobalStyle;