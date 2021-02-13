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
        font-family: "UhBeeSeulvely", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    html {
        font-family: "UhBeeSeulvely", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        width: 100vw;
        background-color: #FFFFFF;
    }
    body {
        position: relative;
        max-width: 480px;
        min-height: 100vh; 
        height: auto;
        margin: 0 auto;
        background-color: #F8F8F8;
        color: #1A1515;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        padding: 0;
        border: none;
        margin: 0;
        background: none;
    }
`;

export default GlobalStyle;
