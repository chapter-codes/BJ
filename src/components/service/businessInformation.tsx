import CountryStateLocalGovernmentArea from "./countryStateLocalGovernmentArea"
import Input from "./input"
import Label from "./label"
import SelectState from "./selectState"

function BusinessInformation() {
  return (
    <div className="">
        <h3 className='text-lg  font-semibold  capitalize'>Business Information</h3>
        <p className="text-base text-secondary-foreground mt-1 ">Tell us about your business</p>
        <form action="" className="flex flex-col mt-10">
            <Label htmlFor="businessType">Business Type</Label> 
            <Input id="businessType" name='businessType' placeholder="Enter your proposed business name"/>
            <Label htmlFor="businessAddress">Business Description</Label>
            <textarea 
                name="businessDescription" 
                id="businessDescription" 
                placeholder="Describe what your business does."
                className="h-30 border border-service-border rounded-[10px] resize-none pt-2 pl-4 mt-1 mb-8 placeholder-secondary-foreground"
                >

            </textarea>
            <Label htmlFor="businessAddress">Business Address</Label>
            <textarea 
                name="businessAddress" 
                id="businessAddress" 
                placeholder="Describe what your business does."
                className="h-30 border border-service-border rounded-[10px] resize-none pt-2 pl-4 mt-1 mb-8 placeholder-secondary-foreground"
                >
            </textarea>
            <CountryStateLocalGovernmentArea />
            

        </form>


      
    </div>
  )
}

export default BusinessInformation
