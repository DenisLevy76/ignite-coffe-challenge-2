import { Outlet } from 'react-router-dom'

// import { Container } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      Header
      <Outlet />
    </div>
  )
}
