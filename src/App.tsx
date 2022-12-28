import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext/provider'
import { RoutesWrapper } from './pages/Routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <RoutesWrapper />
          <GlobalStyles />
        </ThemeProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}
