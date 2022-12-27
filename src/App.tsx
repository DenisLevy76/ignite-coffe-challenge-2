import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RoutesWrapper } from './pages/Routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <RoutesWrapper />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
