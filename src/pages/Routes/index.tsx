import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home'
import { DefaultLayout } from '../Layouts/DefaultLayout'

export const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
