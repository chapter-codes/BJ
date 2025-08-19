// import {Button} from '@/components/ui/button'
type ServiceFormProp = {
    children?: React.ReactNode
} 
function ServiceFormCard({children}:ServiceFormProp) {
  return (
    <div className='md:basis-2/3 text-foreground bg-white rounded-xl border border-service-border max-w-[731px] px-4 md:px-10 py-6 md:py-10'>
      {children}  
       <div className="">
            <div className="flex justify-between w-full mt-12">
                {/* <Button 
                    className={`w-32 md:w-52 border ${ step > 1 ? '': ' bg-disabled-btn border-disabled-btn-border'}`}
                    disabled={step == 1}
                    onClick={handlePrevious}
                    >
                        Previous
                </Button>
                <Button 
                    className={`text-white min-w-32 md:w-50 ${ stepCompleted ? 'bg-background': ' bg-disabled-previous-btn'}`}
                    disabled={!stepCompleted}
                    onClick={handleNext}
                    >
                        Next
                </Button> */}
            </div>
        </div> 
    </div>
  )
}

export default ServiceFormCard
