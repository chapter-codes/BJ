
// libray
import { ReactLenis } from 'lenis/react'
import { LoadingContextProvider } from './context/loadingContext';
import Home from '@/components/Home'
// components

// import Loading from './components/loading';
const App = ()=>{


  // if(!isLoaded) return <Loading /> ;
  return <>
    <ReactLenis root />
    <LoadingContextProvider>
      <Home/>
    </LoadingContextProvider>
      
   </> 
}

export default App;