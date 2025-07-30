import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {SquareMenu} from 'lucide-react'


function MobileNav({links}:{links:string[]}){
    return <>
        <DropdownMenu >
            <DropdownMenuTrigger>
                <SquareMenu color={'#C39A2D'} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="sm:hidden w-dvw  relative right-0 top-3 text-base mt-3 mr- flex gap-2 justify-center items-center px-2 py-4 rounded-none">
                {/* <DropdownMenuLabel>Navigation</DropdownMenuLabel> */}
                <div className="">

                </div>
                        { links.map(link=> 
                            <DropdownMenuItem className="capitalize hover:text-secondary-background active:text-secondary-background transition-[color] duration-300" key={link}> 
                                    <a href={`#${link=="FAQS"?'faqs': link}`}>{link}</a> 
                            </DropdownMenuItem>
                        )}
                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    </>

}

export default MobileNav