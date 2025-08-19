import { useState, useEffect } from 'react'
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue
} from '@/components/ui/select'
import { countryStates } from '@/lib/data'

type Countries = 'nigeria' | 'england' | 'scotland' | 'wales' | 'northern ireland'

type SelectStateProps ={
  className?: string,
  country : null | string
}
// const apiKey = 'mjYVU46Ok0uBnmgmCFMBHdGBUI4dISn9mmddXd2w'



function SelectState({className='', country}:SelectStateProps) {  
  // const [countryStates, setCountryStates] = useState<string[]>([])
  // const [countryState, setCountryState] = useState<null | string>(null)
  
  console.log('country', country)
  const states = country ? countryStates[country.toLowerCase() as Countries] : null
  
  console.log(states)
  useEffect(()=>{
    (async () => {
      if (!country) return;

      // try {
      //   const response = await fetch(`https://api.first.org/data/v1/countries`);
      //   const data = await response.json()
      //   const countries = Object.values(data.data)
      //   const countryNames = countries.map((country: any) => country.country)
      //   setCountryStates([...countryNames])
      // } catch (error) {
      //   console.error(error);
      // }
    })();

  }, [])



  return (
    <Select disabled={country? false : true}>
      <SelectTrigger className={`placeholder-placeholder-foreground! ${className}`}>
        <SelectValue placeholder="Select state" />
      </SelectTrigger>
      <SelectContent data-lenis-prevent className='relative z-[3500] max-h-[300px]'>
        <SelectGroup>
          <SelectLabel className='hidden'>State/County/Region</SelectLabel>
          {states && states.map(dbState => <SelectItem value={dbState} key={dbState} className='Capitalize'>{dbState}</SelectItem> )}


          {/* <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
      
    
  )
}

export default SelectState
