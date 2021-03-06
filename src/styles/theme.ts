interface IStringObject {
  [key: string]: string;
}

const colors: IStringObject = {
  white: '#FFFFFF',
  white2: '#F8F8F8',
  darkgray: '#AAA7A5',
  lightgray: '#C9C7C5',
  darkbrown: '#1A1515',
  background: '#F8F8F8',
};

const fontSizes: IStringObject = {
  headline: '16px',
  title01: '24px',
  title02: '22px',
  title03: '20px',
  title04: '17px',
  body: '16px',
  caption01: '16px',
  caption02: '14px',
  caption03: '12px',
};

const borders: IStringObject = {
  normal: '1px solid #1A1515',
};

const theme = {
  colors,
  fontSizes,
  borders,
};

export default theme;
