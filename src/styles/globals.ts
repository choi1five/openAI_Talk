import theme from './theme';

const globalStyle = `
* {
  box-sizing: border-box;
}  

html,
body {
  padding: 0;
  margin: 0;
  min-height: 100%;
  background: ${theme.black};
  color: ${theme.white};
}

ul {
  padding: 0;
  margin: 0;
}

a {
  color: ${theme.white};
}

button {
  background: inherit;
  border: none;
  padding: 0;
}
`;

export default globalStyle;
