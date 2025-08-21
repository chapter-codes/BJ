import { useState } from "react"
import {Link} from 'react-router'

// components
import  BusinessTypesSelect  from "@/components/service/businessTypesSelect"
import StepDescription from "./stepDescription"


// type
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


  return (
    <div className=''>
        <StepDescription heading="choose your service" description="Select the type of registration service you need." />
        {services?.map(service=>
            <Link
                to={`/services/${service.link}`}
                key={service.title} 
                className="relative flex flex-col md:flex-row justify-between items-center gap-2 rounded-xl border border-service-border px-4 py-4 mt-4"
                >
                    <div className="max-w-[380px] mt-16 md:mt-0">
                        <h4 className=" text-base text-center md:text-left font-semibold capitalize max-w-4/5 mx-auto md:mx-0 md:max-w-full">{service.title}</h4>
                        <p className="text-center md:text-left text-secondary-foreground text-base mt-4 mb-4 md:mt-2 md:mb-2">{service.description}</p>
                    </div>
                    <div className="absolute md:relative top-4 md:top-0 right-2 md:right-0 flex justify-center  text-lg font-semibold bg-price-background border rounded-full px-4 py-2 md:min-w-[120px]">
                        ₦{service.price}
                    </div>    
            </Link>
        )}
        { (services.length == 1)  &&  <BusinessTypesSelect businessTypes={businessTypes} setStepCompleted={setStepCompleted} /> }
    </div>
  )
}

export default ChooseService
