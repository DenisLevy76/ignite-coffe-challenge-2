import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      border: none;
      box-sizing: border-box;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.colors.purple};
      border-radius: 4px;
    }

    body {
      background: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button {
      color: ${theme.colors.baseText};
      font-family: ${theme.type.fontFamily};
      font-weight: 400;
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      color: ${theme.colors.baseTitle};
      font-family: ${theme.type.titleFontFamily};
      font-weight: bold;
    }

    ul,
    ol {
      list-style: none;
    }
  `}
`
