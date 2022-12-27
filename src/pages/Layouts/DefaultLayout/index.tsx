import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../../components/HeaderComponent'

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}
