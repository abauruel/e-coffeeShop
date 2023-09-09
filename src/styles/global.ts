import { createGlobalStyle } from 'styled-components'

// font-family: 'Baloo 2', cursive;
// font-family: 'Roboto', sans-serif;

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.colors.background};
  height: 100vh;
  font-family: 'Roboto';
}
`

