import { Button } from "@/components/ui/button"

type ServiceProps ={
    service:{
        serviceType: string,
        shortDescription: string,
        icon: React.ReactNode,
        showButton?: boolean
    }
}

const ServicesCard = ({service:{serviceType, shortDescription, icon, showButton=true }}: ServiceProps)=>{

    return <div className="flex flex-col justify-center gap-2 w-full lg:h-[352px] py-10 px-4 md:px-8 rounded-lg bg-white border border-white hover:border-secondary-background transition-[border-color] duration-300 ">
        <div className="mb-4">{icon}</div>
        <h2 className="lg:hidden text-sm md:text-lg text-foreground font-semibold" dangerouslySetInnerHTML={{ __html: serviceType }} ></h2>
        <h2 className="hidden lg:block text-lg text-foreground font-semibold"  >{serviceType.replace('<br>', '')}</h2>
        <p className="text-sm text-secondary-foreground">{shortDescription}</p>
        {
            showButton && <div className="grow flex items-end w-full">
                <Button className='capitalize bg-background text-white mt-8 w-full'>proceed now</Button>
            </div>
        }
    </div>
}

export default ServicesCard