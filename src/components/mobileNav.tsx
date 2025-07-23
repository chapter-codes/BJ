import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {SquareMenu} from 'lucide-react'


function MobileNav({links}:{links:string[]}){
    return <>
        <DropdownMenu >
            <DropdownMenuTrigger>
                <SquareMenu color={'#C39A2D'} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-base mt-3 mr-2">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                        { links.map(link=> 
                            <DropdownMenuItem className="capitalize hover:text-secondary-background transition-[color] duration-300" key={link}> 
                                    <a href={`#${link=="FAQS"?'faqs': link}`}>{link}</a> 
                            </DropdownMenuItem>
                        )}
                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    </>

}

export default MobileNav