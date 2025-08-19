 

import * as React from "react"
import { CheckIcon, ChevronDownIcon, } from "lucide-react"
// import {rightCaret} from '@/assets/images'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type SelectCountryProps = {
  country : null | string
  setCountry : React.Dispatch<React.SetStateAction<null | string>>
}

export function SelectCountry ({country, setCountry}:SelectCountryProps) {
  const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")  
  const [countries, _setCountries] = React.useState<string[]>(['England', 'Nigeria', 'Nothern Ireland', 'Scotland', 'Wales'])
  


  React.useEffect(()=>{
    (async () => {
      // try {
      //   const response = await fetch('https://api.first.org/data/v1/countries');
      //   const data = await response.json()
      //   const countries = Object.values(data.data)
      //   const countryNames = countries.map((country: any) => country.country)
      //   setCountries([...countryNames])
      // } catch (error) {
      //   console.error(error);
      // }
    })();

  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="flex justify-between px-3 w-full">
        {/* <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        > */}
          <button className="flex items-center border border-service-border h-12 mt-1 rounded-[10px] basis-1/2 w-full">
            {country
            ? countries.find((countryItem) => countryItem === country)
            : <p className="text-placeholder-foreground">Select country</p>
            }
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        {/* </Button> */}
          </button>
      </PopoverTrigger>
      <PopoverContent className="relative z-[3500] w-full! max-w-[300px] p-0" data-lenis-prevent>
        <Command>
          <CommandInput placeholder="Search Country..." />
          <CommandList>
            <CommandEmpty>No Country found.</CommandEmpty>
            <CommandGroup>
              <React.Suspense fallback={<p>loading...</p>}>
                {countries.map((countryItem) => (
                  <CommandItem
                    key={countryItem}
                    value={countryItem}
                    onSelect={(currentValue) => {
                      setCountry(currentValue === country ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        country === countryItem ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <p className="capitalize">{countryItem}</p>
                  </CommandItem>
                ))}
              </React.Suspense>

            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default SelectCountry