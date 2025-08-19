import { useState } from "react"

import SelectState from "./selectState"
import Label from "./label"
import Input from "./input"
import SelectCountry from "./selectCountry"


function CountryStateLocalGovernmentArea() {
  const [country, setCountry] = useState<null | string>(null)
  
  return (
    <>  
        <div className="flex gap-2 lg:gap-6" >
            <div className="basis-1/2">
                <Label>Country</Label>
                <SelectCountry country={country} setCountry={setCountry} />

            </div>
            <div className="basis-1/2">
                <Label htmlFor="state">State/county/council</Label>
                <SelectState country={country}  className="w-full h-12! mt-1"/>
            </div>
        </div>
        <Label htmlFor="localGovernmentArea" className="mt-8">Local Government Area/ Local Authority</Label>
        <Input placeholder="Enter LGA" className="placeholder-placeholder-foreground" />
    </>
  )
}

export default CountryStateLocalGovernmentArea
