
// libray
import { ReactLenis } from 'lenis/react'
import { LoadingContextProvider } from './context/loadingContext';
import AppRoutes from '@/routes';

const App = ()=>{


  return <>
    <ReactLenis root />
    <LoadingContextProvider>
      <AppRoutes />
    </LoadingContextProvider>
   </> 
}

export default App;