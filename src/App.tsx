import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AddressContextProvider } from './contexts/AddressContext/provider'
import { CartContextProvider } from './contexts/CartContext/provider'
import { RoutesWrapper } from './pages/Routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export const App = () => {
  return (
    <BrowserRouter>
      <AddressContextProvider>
        <CartContextProvider>
          <ThemeProvider theme={defaultTheme}>
            <RoutesWrapper />
            <GlobalStyles />
          </ThemeProvider>
        </CartContextProvider>
      </AddressContextProvider>
    </BrowserRouter>
  )
}
