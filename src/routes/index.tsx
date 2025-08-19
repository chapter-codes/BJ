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
          </Route>
          <Route path='/services/:service' element={<Service fullServiceList={false} />} />
          <Route path='/services' element={<Service fullServiceList/>} />
          <Route path='/test' element={<Test />} />

          {/* standalone routes */}
        </Routes>
  </> 
  )
}

export default AppRoutes



function Test() {
  return (
    <div className='h-[130svh] w-full  bg-gray-500 '>
      lorem500
    </div>
  )
}

