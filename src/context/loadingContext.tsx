import {useState, createContext, useContext} from 'react'

type LoadingContextType = {
    loading:Loading, 
    setLoadingState:React.Dispatch< React.SetStateAction<Loading> >
}
type Loading = boolean | 'fetching' 
type Props = {
    children: React.ReactNode
}

const LoadingContext = createContext< LoadingContextType | null>(null)

export function LoadingContextProvider({children}:Props) {
    const [loading, setLoadingState] = useState<Loading>(true)
  return (
    <LoadingContext.Provider value={{loading, setLoadingState}}>
        {children}
    </LoadingContext.Provider>
  )
}


export function useLoading(): LoadingContextType{
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingContextProvider');
  }
  return context;
}

