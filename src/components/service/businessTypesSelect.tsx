import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
type BusinessTypes = {
    businessTypes: string[]
    setStepCompleted: React.Dispatch<React.SetStateAction<boolean>>
}
export function BusinessTypesSelect({businessTypes, setStepCompleted}:BusinessTypes) {
  return (
    <Select onValueChange={()=>setStepCompleted(true)}>
      <SelectTrigger className="h-12! w-full mt-8 text-secondary-foreground">
        <SelectValue placeholder="Select business type" className=" py-4!" />
      </SelectTrigger>
      <SelectContent className="max-w-[340px]  ">
        <SelectGroup className="flex flex-col gap-2 text-secondary-foreground text-base max-w-[340px]  px-5! py-5">
          <SelectLabel className="hidden">Business types</SelectLabel>
            {businessTypes.map( type => 
                <SelectItem 
                    key={type} 
                    value={type}
                    className=" hover:text-secondary-foreground! border border-white hover:bg-business-type-background hover:border-business-type-border pl-5 pr-2 py-2.5 rounded-full transition-colors duration-300 "
                >
                    {type}
                </SelectItem>
            )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}