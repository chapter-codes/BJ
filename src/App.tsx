
// libray
import { ReactLenis } from 'lenis/react'
import { LoadingContextProvider } from './context/loadingContext';
import AppRoutes from '@/routes';
// import { useInstantScrollOnRouteChange } from '@/hooks/useInstantScrollOnRouteChange';
// import { useScrollHistory } from '@/hooks/useScrollHistory';
// import {useViewTransitionForServices} from '@/hooks/useStartTransition'

const App = ()=>{
  // useInstantScrollOnRouteChange()
  // useScrollHistory()
  // useViewTransitionForServices()

  return <>
    <ReactLenis root />
    <LoadingContextProvider>
      <AppRoutes />
    </LoadingContextProvider>
   </> 
}

export default App;