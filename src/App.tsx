
// libray
import { ReactLenis } from 'lenis/react'
import { LoadingContextProvider } from './context/loadingContext';
import AppRoutes from '@/routes';
import { useInstantScrollOnRouteChange } from '@/hooks/useInstantScrollOnRouteChange';
import { FormProvider } from './context/FormContext';
// import { useScrollHistory } from '@/hooks/useScrollHistory';
// import {useViewTransitionForServices} from '@/hooks/useStartTransition'

const App = ()=>{
  useInstantScrollOnRouteChange()
  return <>
    <ReactLenis root />
    <LoadingContextProvider>
      <FormProvider>
        <AppRoutes />
      </FormProvider>
    </LoadingContextProvider>
   </> 
}

export default App;