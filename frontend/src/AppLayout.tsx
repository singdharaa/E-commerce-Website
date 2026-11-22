import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AppLayout