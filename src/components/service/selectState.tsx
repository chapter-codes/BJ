import { useEffect } from 'react'
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

function SelectState({className='', country}:SelectStateProps) {  
  console.log('country', country?.toLowerCase())
  const states = country ? countryStates[country.toLowerCase() as Countries] : null
  
  // const [defaultValue, setDefaultValue] = useState('select state')
  console.log(states)

  useEffect(()=>{
    // if(country) setDefaultValue('Select State');
  }, [country])



  return (
    <Select disabled={country? false : true}>
      <SelectTrigger className={`placeholder-placeholder-foreground! ${className}`}>
        <SelectValue placeholder="Select state" />
      </SelectTrigger>
      <SelectContent data-lenis-prevent className='relative z-[3500] max-h-[300px]'>
        <SelectGroup>
          <SelectLabel className='hidden'>State/County/Region</SelectLabel>
          {states && states.map(dbState => <SelectItem value={dbState} key={dbState} className='Capitalize'>{dbState}</SelectItem> )}
        </SelectGroup>
      </SelectContent>
    </Select>
      
    
  )
}

export default SelectState
