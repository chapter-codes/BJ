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


type SelectIdProps ={
  className?: string,
  country? : null | string
}

const idTypes =[
    'national ID', "drivers's license", 'international passport', 'NIN', "voter's card", 'BVN'
]
function SelectId({className='', country}:SelectIdProps) {  
    const [idType, setIDtype] = useState<null| string>(null)
  return (
    <Select  onValueChange={(value)=>setIDtype(value)}>
      <SelectTrigger className={`h-12! mt-2 w-full ${idType? '': 'text-placeholder-foreground!'} ${className}`}>
        <SelectValue placeholder="Select ID type"  />
      </SelectTrigger>
      <SelectContent data-lenis-prevent className='text-primary relative z-[3500] max-h-[300px]'>
        <SelectGroup>
          <SelectLabel className='hidden'>State/County/Region</SelectLabel>
            {idTypes.map(idType => <SelectItem value={idType} key={idType} className='Capitalize'>{idType}</SelectItem> )}
        </SelectGroup>
      </SelectContent>
    </Select>
      
    
  )
}

export default SelectId
