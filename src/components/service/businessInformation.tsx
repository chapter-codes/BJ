import { useCallback } from "react"
import { debounce } from "@/lib/debounce"

import CountryStateLocalGovernmentArea from "./countryStateLocalGovernmentArea"
import Input from "./input"
import Label from "./label"
import StepDescription from "./stepDescription"
import { useFormContext } from "@/context/FormContext"


function BusinessInformation() {
  const {dispatch} = useFormContext()
const debouncedHandleChange = useCallback(
  debounce((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // dispatch({type: 'UPDATE_FIELD', })
  }, 300),
  []
);

  return (
    <div className="">
      <StepDescription heading={'Business Information'} description={'Tell us about your business'} />

        <form action="" className="flex flex-col mt-10">
            <Label htmlFor="businessType">Business Type</Label> 
            <Input id="businessType" name='businessType' placeholder="Enter your proposed business name" onChange={debouncedHandleChange}/>
            <Label htmlFor="businessAddress">Business Description</Label>
            <textarea 
                name="businessDescription" 
                id="businessDescription" 
                placeholder="Describe what your business does."
                className="h-30 border border-service-border rounded-[10px] resize-none pt-2 pl-4 mt-1 mb-8 placeholder-secondary-foreground"
                onChange={debouncedHandleChange}
                >

            </textarea>
            <Label htmlFor="businessAddress">Business Address</Label>
            <textarea 
                name="businessAddress" 
                id="businessAddress" 
                placeholder="Describe what your business does."
                className="h-30 border border-service-border rounded-[10px] resize-none pt-2 pl-4 mt-1 mb-8 placeholder-secondary-foreground"
                onChange={debouncedHandleChange}
                >
            </textarea>
            <CountryStateLocalGovernmentArea />
            

        </form>


      
    </div>
  )
}

export default BusinessInformation
