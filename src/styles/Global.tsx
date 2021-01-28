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
    body {
        font-family: "UhBeeSeulvely", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
`;

export default GlobalStyle;
