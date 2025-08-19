import { useState } from "react"
import {Link} from 'react-router'
import { Button } from "@/components/ui/button"
import { BusinessTypesSelect } from "@/components/service/businessTypesSelect"
import type { ServicesWithPrice } from "@/components/service/types"


type ChooseService ={
    step:number,
    setStep: React.Dispatch<React.SetStateAction<number>>
    services: ServicesWithPrice
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
        window.scrollTo(0,0)
    }
    const handlePrevious = ()=>{
        setStep((prev)=> Math.max(prev - 1,  1))
        setStepCompleted(false)
    }

  return (
    <div className=''>
        <h3 className='text-lg  font-semibold  capitalize'>choose your service</h3>
        <p className="text-base text-secondary-foreground mt-1 ">Select the type of registration service you need</p>
        
        {services?.map(service=>
            <Link
                to={`/services/${service.link}`}
                key={service.title} 
                className="relative flex flex-col md:flex-row justify-between items-center gap-2 rounded-xl border border-service-border px-4 py-4 mt-4"
                >
                    <div className="max-w-[380px]">
                        <h4 className=" text-base font-semibold capitalize max-w-3/5 md:max-w-full">{service.title}</h4>
                        <p className="text-secondary-foreground texx-base mt-6 md:mt-2">{service.description}</p>
                    </div>
                    <div className="absolute md:relative top-2 md:top-0 right-2 md:right-0 flex justify-center  text-lg font-semibold bg-price-background border rounded-full px-4 py-2 md:min-w-[120px]">
                        ₦{service.price}
                    </div>    
            </Link>
        )}

        { (services.length == 1)  &&  <BusinessTypesSelect businessTypes={businessTypes} setStepCompleted={setStepCompleted} /> }

    </div>
  )
}

export default ChooseService
