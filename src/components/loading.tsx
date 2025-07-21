import {pageLogo} from '@/assets/images'

function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-svh bg-background'>
        <img src={pageLogo} alt="loading spinner" className='animate-bounce w-30' />
    </div>
  )
}

export default Loading
