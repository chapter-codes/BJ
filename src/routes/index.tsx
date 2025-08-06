import {Routes, Route, useLocation} from 'react-router'
import Service from '@/pages/service'
import Home from '@/pages/home'

function AppRoutes() {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<div>
              {/* <Home /> */}
              <Service fullServiceList/>
          </div>} />
        </Routes>

      {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service fullServiceList/>} />
          <Route path='/services/:service' element={<Service fullServiceList={false} />} />
      </Routes> */}
  </> 
  )
}

export default AppRoutes
