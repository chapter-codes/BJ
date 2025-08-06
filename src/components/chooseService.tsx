import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BusinessTypesSelect } from "@/components/service/businessTypesSelect"
import type { Services } from "@/components/service/types"


type ChooseService ={
    step:number,
    setStep: React.Dispatch<React.SetStateAction<number>>
    services: Services
}
function ChooseService({step, setStep, services}:ChooseService) {
    const [stepCompleted, setStepCompleted] = useState(false)
    const businessTypes = [
        "Sole Proprietorship",
        "Partnership",
        "Limited Liability Company",
        "Non-Governmental Organization",
        "Religious Organization"
    ]

    const handleNext = ()=>{
        setStep((prev)=> Math.min(prev + 1, 4))
        setStepCompleted(true)
    }
    const handlePrevious = ()=>{
        setStep((prev)=> Math.max(prev - 1,  1))
        setStepCompleted(false)
    }

    console.log('stepcom', stepCompleted)
    console.log('step', step)
  return (
    <div className='basis-2/ text-foreground bg-white rounded-xl border border-service-border mt-4 max-w-[731px] px-4 md:px-10 py-10'>
        <h3 className='text-lg  font-semibold  capitalize'>choose your service</h3>
        <p className="text-base text-secondary-foreground mt-1 ">Select the type of registration service you need</p>
        
        {services.map(service=>
            <div
                key={service.title} 
                className="md:flex justify-between items-center gap-2 rounded-xl border border-service-border px-4 py-4 mt-12"
                >
                    <div className="max-w-[380px]">
                        <h4 className=" text-base font-semibold capitalize">{service.title}</h4>
                        <p className="text-secondary-foreground texx-base mt-2">{service.description}</p>
                    </div>
                    <div className="flex justify-center  text-lg font-semibold bg-price-background border rounded-full px-4 py-2 min-w-[120px]">
                        #{service.price}
                    </div>    
            </div>
        )}

        <h3 className="text-xl font-semibold capitalize mt-12">business type</h3>
        <BusinessTypesSelect businessTypes={businessTypes} setStepCompleted={setStepCompleted} />
        <div className="flex justify-between w-full mt-12">
            <Button 
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
            </Button>
            
        </div>
    </div>
  )
}

export default ChooseService
