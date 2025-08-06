// import React from 'react'
import CustomDiv from '@/components/common/customDiv'

function ServiceModal() {
  return (
    <CustomDiv 
        className='fixed top-header h-full w-full flex flex-col pt-10'
    >
        <button
            className='flex gap-2'
            onClick={()=>null}
        >
            Back to Home
        </button>
    </CustomDiv>
  )
}

export default ServiceModal
