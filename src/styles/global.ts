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
      outline: 2px solid ${theme.colors.purple};
      border-radius: 4px;
    }

    body {
      background: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button,
    a {
      color: ${theme.colors.baseText};
      font-family: ${theme.type.fontFamily};
      font-weight: 400;
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
      text-decoration: none;
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
      font-size: 1.25rem;
    }

    ul,
    ol {
      list-style: none;
    }
  `}
`
