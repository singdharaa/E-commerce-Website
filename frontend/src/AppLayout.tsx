import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default AppLayout