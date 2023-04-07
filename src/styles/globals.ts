import theme from './theme';

const globalStyle = `
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}  

html,
body {
  min-height: 100%;
  background: ${theme.black};
  color: ${theme.white};
}

a {
  color: ${theme.white};
}

button {
  background: inherit;
  border: none;
}
`;

export default globalStyle;
