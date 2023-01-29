import PoppinsRegularWoff from './poppins/Poppins-Regular.woff';
import PoppinsRegularWoff2 from './poppins/Poppins-Regular.woff2';
import PoppinsBoldWoff from './poppins/Poppins-Bold.woff';
import PoppinsBoldWoff2 from './poppins/Poppins-Bold.woff2';

import CirceRegularWoff from './circle/Circe-Regular.woff';
import CirceRegularWoff2 from './circle/Circe-Regular.woff2';
import CirceBoldWoff from './circle/Circe-Bold.woff';
import CirceBoldWoff2 from './circle/Circe-Bold.woff2';

import { createGlobalStyle } from 'styled-components';

export const GlobalFontComponent = createGlobalStyle`
@font-face {
    font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'), local('PoppinsRegular'),
        url(${PoppinsRegularWoff2}) format('woff2'),
        url(${PoppinsRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
}
@font-face {
    font-family: 'PoppinsBold';
    src: local('PoppinsBold'), local('PoppinsBold'),
    url(${PoppinsBoldWoff2}) format('woff2'),
    url(${PoppinsBoldWoff}) format('woff');
    font-weight: 700;
    font-style: bold;
}
@font-face {
    font-family: 'CirceRegular';
    src: local('CirceRegular'), local('CirceRegular'),
    url(${CirceRegularWoff2}) format('woff2'),
    url(${CirceRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'CirceBold';
    src: local('CirceBold'), local('CirceBold'),
    url(${CirceBoldWoff2}) format('woff2'),
    url(${CirceBoldWoff}) format('woff');
    font-weight: 700;
    font-style: bold;
}
`;
