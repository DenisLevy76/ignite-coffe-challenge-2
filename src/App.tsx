import { BrowserRouter } from 'react-router-dom'
import { RoutesWrapper } from './pages/Routes'
import { GlobalStyles } from './styles/global'

export const App = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper />
      <GlobalStyles />
    </BrowserRouter>
  )
}
