import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'UhBeeSeulvely';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSeulvely.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    * {
        box-sizing: border-box;
    }
    html {
        width: 100vw;
        background-color: #FFFFFF;
    }
    body {
        max-width: 480px;
        min-height: 100vh; 
        height: auto;
        margin: 0 auto;
        background-color: #F4F4F4;
        font-family: "UhBeeSeulvely", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: #1A1515;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    a {
    color: inherit;
    text-decoration: none;
    }
`;

export default GlobalStyle;
