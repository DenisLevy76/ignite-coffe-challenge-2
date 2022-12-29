import { Routes, Route } from 'react-router-dom'
import { Checkout } from '../Checkout'
import { Home } from '../Home'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { SuccessOrder } from '../SuccessOrder'

export const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success-order" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
