import { Button } from "@/components/ui/button"
import { Link } from "react-router"

type ServiceProps ={
    service:{
        serviceType: string,
        shortDescription: string,
        icon: React.ReactNode,
        showButton?: boolean
        link?: string
    }
}

const ServicesCard = ({service:{serviceType, shortDescription, icon, link, showButton=true }}: ServiceProps)=>{

    return <div className={`flex flex-col justify-center gap-2 w-full lg:h-[340px] py-10 px-4 md:px-8 rounded-lg bg-white border border-white ${showButton && 'hover:border-secondary-background active:border-secondary-background'} transition-[border-color] duration-300 `}>
        <div className="mb-4">{icon}</div>
        <h2 className="lg:hidden text-sm md:text-lg text-foreground font-semibold" dangerouslySetInnerHTML={{ __html: serviceType }} ></h2>
        <h2 className="hidden lg:block text-lg text-foreground font-semibold"  >{serviceType.replace('<br>', '')}</h2>
        <p className="text-sm text-secondary-foreground">{shortDescription}</p>
        {
            showButton && <div className="grow flex items-center w-full">
                <Button className='capitalize bg-background text-white mt-8 w-full'>
                    <Link to={'/services/' + link || '#'}>proceed now</Link>
                </Button>
            </div>
        }
    </div>
}

export default ServicesCard