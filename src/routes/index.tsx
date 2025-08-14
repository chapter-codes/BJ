import {Routes, Route, } from 'react-router'
import Service from '@/pages/service'
import Home from '@/pages/home'

function AppRoutes() {
  // const location = useLocation()
  // const state = location.state as { backgroundLocation?: Location }

  return (
    <>
        <Routes >
          <Route element={<Home />} >
            <Route path='/' element={null}/>
            <Route path='/services' element={<Service fullServiceList/>} />
            <Route path='/services/:service' element={<Service fullServiceList={false} />} />
          </Route>
          <Route path='/services' element={<Service fullServiceList/>} />
          <Route path='/services/:service' element={<Service fullServiceList={false} />} />

          {/* standalone routes */}
        </Routes>
  </> 
  )
}

export default AppRoutes
